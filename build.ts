import {build} from "esbuild"

build({
  entryPoints: ["./src/index.ts"],
  outdir: "dist",
  platform: "node",
})
.then(() => console.log("build success."))
.catch(() => {
  console.error("build failed")
  process.exit(1)
})