import { defineConfig } from "ndst";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  clean: true,
  minify: true,
  format: ["esm"],
  bundle: true,
  sourcemap: true,
});
