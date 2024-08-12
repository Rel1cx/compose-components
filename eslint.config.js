// @ts-check

import react from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules",
      "dist",
    ],
  },
  // JavaScript rules
  js.configs.recommended,
  // TypeScript rules
  ...tseslint.configs.recommendedTypeChecked,
  // TypeScript languageOptions
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // TypeScript languageOptions for config files
  {
    files: ["*.config.{js,ts}", "*.d.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  // React rules
  {
    files: ["src/**/*.{ts,tsx}"],
    ...react.configs["recommended-type-checked"],
  },
  // Disable type checking for JavaScript files
  {
    files: ["*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
];
