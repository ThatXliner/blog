import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

const nodeGlobals = {
  module: "writable",
  require: "readonly",
  process: "readonly",
  __dirname: "readonly",
};

export default [
  {
    ignores: [
      ".astro/",
      ".husky/",
      ".vscode/",
      "node_modules/",
      "public/",
      "dist/",
    ],
  },
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: nodeGlobals,
    },
  },
];
