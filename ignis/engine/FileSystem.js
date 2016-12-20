"use strict";

var fs = require("fs");
var format = require("string-format");
var os = require("os");

function convertPath(path,filename) {
    let osName = os.platform();
    let newPath = format("{}/{}",path,filename);

    if (osName == "win32")
        return newPath.split("/").join("\\");
    else {
        return newPath;
    }
}

function readFile(path,filename) {
    return fs.readFileSync(convertPath(path,filename));
}

module.exports = readFile;
module.exports = convertPath;