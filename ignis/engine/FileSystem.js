"use strict";

var fs = require("fs");
var format = require("string-format");
var os = require("os");


class FileSystem {

    static convertPath(path, filename) {
        let osName = os.platform();
        let newPath = format("{}/{}", path, filename);

        if (osName == "win32")
            return newPath.split("/").join("\\");
        else {
            return newPath;
        }
    }

    static readFile(path, filename) {
        return fs.readFileSync(FileSystem.convertPath(path, filename));
    }
}


module.exports = FileSystem;