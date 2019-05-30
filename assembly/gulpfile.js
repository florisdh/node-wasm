const gulp = require("gulp");

const build = callback => {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    "main.ts",
    "--baseDir", "src",
    "--binaryFile", "../build/main.wasm",
    "--sourceMap",
    "--measure"
  ], callback);
};

exports.build = build;
exports.default = build;
