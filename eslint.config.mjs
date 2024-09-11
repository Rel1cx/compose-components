// @ts-check

import react from "@eslint-react/eslint-plugin";
import rsESLint from "@rebeccastevens/eslint-config";

const GLOB_JS = ["*.{js,jsx,cjs,mjs}", "**/*.{js,jsx,cjs,mjs}"];
const GLOB_TS = ["*.{ts,tsx,cts,mts}", "**/*.{ts,tsx,cts,mts}"];
const GLOB_TEST = [
  "**/*.spec.{ts,tsx,cts,mts}",
  "**/*.test.{ts,tsx,cts,mts}",
  "**/spec.{ts,tsx,cts,mts}",
  "**/test.{ts,tsx,cts,mts}",
];
const GLOB_CONFIG = ["*.config.{ts,tsx,cts,mts}", "**/*.config.{ts,tsx,cts,mts}"];
const GLOB_SCRIPT = ["scripts/**/*.{ts,cts,mts}"];

export default rsESLint(
  {
    projectRoot: import.meta.dirname,
    formatters: false,
    functional: "none",
    jsonc: false,
    markdown: true,
    mode: "library",
    stylistic: false,
    typescript: true,
    yaml: false,
    ignores: [
      "node_modules",
      "dist",
      "benchmark",
      "eslint.config.mjs",
      "eslint.config.d.ts",
    ],
  },
  {
    files: GLOB_TS,
    ...react.configs["recommended-type-checked"],
  },
  {
    files: GLOB_TS,
    rules: {
      "ts/array-type": "off",
      "jsdoc/require-jsdoc": "off",
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: [...GLOB_TEST, ...GLOB_CONFIG, ...GLOB_SCRIPT],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.node.json",
        projectService: false,
      },
    },
  },
);
