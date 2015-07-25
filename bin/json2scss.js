#! /usr/bin/env node

"use strict";

var json2scss = require("../index.js"),
    fs = require("fs");

var args = process.argv.slice(2),
    param = args[0],
    input;

if (param.indexOf("-") === 0) {
    switch (param) {
    case "-h":
    case "--help":
        process.stdout.write("Usage:\n    json2scss input.json > output.scss\n");
        break;
    case "-v":
    case "--version":
        process.stdout.write(require("../package.json").version + "\n");
        break;
    default:
        process.stdout.write("Invalid parameters passed. See '--help' for usage.\n");
        process.exit(1);
    }

    process.exit(0);
}

try {
    input = fs.readFileSync(args[0], "utf-8");
} catch (e) {
    process.stderr.write(e.message);
    process.exit(1);
}

try {
    process.stdout.write(json2scss(input.toString()));
} catch (e) {
    process.stderr.write(e.message);
    process.exit(1);
}

process.exit(0);
