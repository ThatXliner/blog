import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from "remark-math";
import remarkFigureCaption from "@microflash/remark-figure-caption";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  base: "/blog",
  site: "https://thatxliner.github.io",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
      remarkMath,
      remarkFigureCaption,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeAutolinkHeadings,
      // rehypeVideo,
    ],
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
