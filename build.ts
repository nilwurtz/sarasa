import { build } from "esbuild";

const isDev = process.env.NODE_ENV !== "production";

build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  outfile: "dist/main.js",
  platform: "node",
  minify: !isDev,
  watch: isDev
    ? {
        onRebuild(error, result) {
          if (error) console.error("watch build failed:", error.message);
          else console.log("watch build succeeded:", result);
        },
      }
    : false,
})
  .then(() => {
    console.log(`Dev mode=${isDev}`);
    console.log("build success.");
  })
  .catch(() => {
    console.error("build failed");
    process.exit(1);
  });
