// @ts-check

import react from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import jsdocPlugin from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";

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

export default [
  {
    ignores: [
      "node_modules",
      "dist",
      "eslint.config.mjs",
      "eslint.config.d.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    ignores: GLOB_CONFIG,
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: GLOB_TS,
    ...react.configs["recommended-type-checked"],
  },
  {
    files: [...GLOB_JS, ...GLOB_TS].map((pattern) => `src/${pattern}`),
    ...jsdocPlugin.configs["flat/recommended-typescript-error"],
    rules: {
      ...jsdocPlugin.configs["flat/recommended-typescript-error"].rules,
      "jsdoc/require-param": "off",
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
  {
    files: GLOB_JS,
    ...tseslint.configs.disableTypeChecked,
  },
];
