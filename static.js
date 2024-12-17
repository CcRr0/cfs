const fs = require("fs");
const path = require("path");

const src = "./app";
const dest = "./live";

fs.watch(src, { recursive: true }, (event, filename) => {
    if(!filename || filename.endsWith("~")) {
        return;
    }
    const srcPath = path.join(src, filename);
    const destPath = path.join(dest, filename);
    if(event === "rename") {
        if(fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
        } else {
            fs.unlinkSync(destPath);
        }
    } else {
        fs.copyFileSync(srcPath, destPath);
    }
});
