/* eslint-env mocha */

"use strict";

var data = require("./data.json"),
    json2sass = require("../index.js"),
    assert = require("assert"),
    fs = require("fs"),
    sass = require("node-sass");

describe("json2sass", function() {
    it("should convert json to sass", function() {
        var result;

        fs.writeFileSync(__dirname + "/../dist/_data.scss", json2sass(data), "utf8");

        result = sass.renderSync({
          file: __dirname + "/style.scss",
          outputStyle: "compressed"
        });

        assert.equal(result.css.toString(), fs.readFileSync(__dirname + "/compiled.scss", "utf8"));
    });
});
