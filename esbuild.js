const esbuild = require("esbuild");
const glob = require("glob");
const fs = require("fs");
const path = require("path");

const src = "./src";
const dest = "./live";
const entry = "main.ts";

let ctx;

async function watch() {
    const entryPoints = glob.sync(path.join(src, "**", entry));
    ctx = await esbuild.context({
        entryPoints,
        outbase: src,
        outdir: dest,
        bundle: true,
        platform: "browser"
    });
    await ctx.watch();
}

void watch();

fs.watch(src, { recursive: true }, async(event, filename) => {
    if(!filename || path.basename(filename) !== entry) {
        return;
    }
    if(ctx) {
        await ctx.dispose();
    }
    void watch();
});
