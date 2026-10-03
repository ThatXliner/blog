import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { once } from "node:events";
import { randomUUID } from "node:crypto";
import { createLikesServer } from "../services/likes/server.mjs";

test("anonymous likes are idempotent, survive restart, and reject invalid requests", async () => {
  const dir = mkdtempSync(join(tmpdir(), "blog-likes-"));
  let server;
  const start = async () => {
    server = createLikesServer(join(dir, "likes.sqlite"));
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    return `http://127.0.0.1:${server.address().port}/likes`;
  };
  const stop = async () => {
    const closed = once(server, "close");
    server.close();
    await closed;
  };
  try {
    let endpoint = await start();
    const post = "my-first-blog-post";
    const visitorId = randomUUID();
    const send = (body, origin = "https://bryanhu.com") => globalThis.fetch(endpoint, {
      method: "POST", headers: { "Content-Type": "application/json", Origin: origin },
      body: JSON.stringify(body),
    });
    assert.deepEqual(await (await globalThis.fetch(`${endpoint}?post=${post}`)).json(), { count: 0 });
    assert.deepEqual(await (await send({ post, visitorId })).json(), { count: 1, liked: true });
    assert.deepEqual(await (await send({ post, visitorId })).json(), { count: 1, liked: true });
    assert.deepEqual(await (await send({ post, visitorId: randomUUID() })).json(), { count: 2, liked: true });
    assert.equal((await send({ post, visitorId }, "https://unrelated.example")).status, 403);
    assert.equal((await send({ post: "../bad", visitorId })).status, 400);
    assert.equal((await send({ post, visitorId: "invalid" })).status, 400);
    const preflight = await globalThis.fetch(endpoint, { method: "OPTIONS", headers: { Origin: "https://bryanhu.com" } });
    assert.equal(preflight.status, 204);
    assert.equal(preflight.headers.get("access-control-allow-origin"), "https://bryanhu.com");
    const oversized = await globalThis.fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Origin: "https://bryanhu.com" }, body: "x".repeat(2000) });
    assert.equal(oversized.status, 413);
    await stop();
    endpoint = await start();
    assert.deepEqual(await (await globalThis.fetch(`${endpoint}?post=${post}`)).json(), { count: 2 });
    assert.deepEqual(await (await send({ post, visitorId })).json(), { count: 2, liked: true });
    for (let i = 0; i < 30; i++) await send({ post, visitorId });
    assert.equal((await send({ post, visitorId })).status, 429);
  } finally {
    if (server?.listening) await stop();
    rmSync(dir, { recursive: true, force: true });
  }
});
