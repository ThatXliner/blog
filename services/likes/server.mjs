import { createServer } from "node:http";
import { DatabaseSync } from "node:sqlite";
import { createHash } from "node:crypto";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { URL, pathToFileURL } from "node:url";
import process from "node:process";

export function createLikesServer(databasePath) {
  mkdirSync(dirname(databasePath), { recursive: true });
  const db = new DatabaseSync(databasePath);
  db.exec(`PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS likes (
      post TEXT NOT NULL, visitor TEXT NOT NULL,
      PRIMARY KEY (post, visitor)
    );`);
  const insert = db.prepare("INSERT OR IGNORE INTO likes (post, visitor) VALUES (?, ?)");
  const count = db.prepare("SELECT COUNT(*) AS count FROM likes WHERE post = ?");
  const origins = new Set([
    "https://bryanhu.com", "https://www.bryanhu.com", "https://thatxliner.github.io",
  ]);
  // Keep only a minute of request counts; no IP addresses are saved to disk.
  const requests = new Map();
  let minute = 0;
  const server = createServer(async (req, res) => {
    const origin = req.headers.origin;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Vary", "Origin");
    const reply = (status, body) => {
      res.writeHead(status);
      res.end(JSON.stringify(body));
    };
    if (origin && !origins.has(origin)) return reply(403, { error: "Origin not allowed" });
    if (origin) res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return reply(204, undefined);
    const url = new URL(req.url, "http://localhost");
    if (req.method === "GET" && url.pathname === "/health") return reply(200, { ok: true });
    if (url.pathname !== "/likes") return reply(404, { error: "Not found" });
    const validPost = post => typeof post === "string" && /^[a-z0-9][a-z0-9-]{0,199}$/.test(post);
    if (req.method === "GET") {
      const post = url.searchParams.get("post");
      if (!validPost(post)) return reply(400, { error: "Invalid post" });
      return reply(200, count.get(post));
    }
    if (req.method !== "POST") return reply(405, { error: "Method not allowed" });
    if (!origin) return reply(403, { error: "Origin required" });
    if (req.headers["content-type"] !== "application/json") return reply(415, { error: "JSON required" });
    const now = Math.floor(Date.now() / 60000);
    if (now !== minute) { requests.clear(); minute = now; }
    const ip = req.headers["cf-connecting-ip"] || req.socket.remoteAddress;
    const hits = (requests.get(ip) || 0) + 1;
    requests.set(ip, hits);
    if (hits > 30) return reply(429, { error: "Please try again in a minute" });
    try {
      let body = "";
      for await (const chunk of req) {
        body += chunk;
        if (body.length > 1024) return reply(413, { error: "Request too large" });
      }
      const { post, visitorId } = JSON.parse(body);
      if (!validPost(post) || typeof visitorId !== "string" ||
          !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(visitorId)) {
        return reply(400, { error: "Invalid like" });
      }
      const visitor = createHash("sha256").update(`${post}:${visitorId}`).digest("hex");
      insert.run(post, visitor);
      reply(200, { ...count.get(post), liked: true });
    } catch (error) {
      reply(error instanceof SyntaxError ? 400 : 500, { error: "Could not save like" });
    }
  });
  server.on("close", () => db.close());
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const server = createLikesServer(process.env.DATABASE_PATH || "./data/likes.sqlite");
  server.listen(Number(process.env.PORT || 3015), "0.0.0.0");
  process.on("SIGTERM", () => server.close());
  process.on("SIGINT", () => server.close());
}
