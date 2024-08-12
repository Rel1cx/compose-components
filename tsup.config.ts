import { defineConfig } from "tsup";

export default defineConfig(() => ({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  minify: false,
  outDir: "dist",
  platform: "neutral",
  shims: false,
  sourcemap: false,
  splitting: false,
  target: "es2021",
  treeshake: true,
}));
