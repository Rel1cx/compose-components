// @ts-check

import react from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

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
    ignores: ["*.config.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true
      },
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ...react.configs["recommended-type-checked"],
  },
  {
    files: ["*.config.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.node.json",
        projectService: false
      },
    },
  },
  {
    files: ["*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
];
