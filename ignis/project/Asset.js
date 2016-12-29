"use strict";

var AssetStructure = require("./AssetStructure.js");
var PIXI = require("../../modules/pixi.js");

class Asset {

    /**
     *
     * @param path
     * @param type
     */
    constructor(path,type) {
        this.assetPath = path;
        this.assetType = type;
        this.assetData = null;
    }

    /**
     *
     * @param callback
     */
    load(callback) {
        if (AssetStructure.isImage(this.assetType)) {

            this.assetData = PIXI.Texture.fromImage(this.assetPath);
            if (callback !== undefined) {
                this.assetData.on("update",function() {
                    callback();
                });
            }
        }
    }

    isLoaded() {

    }

}

module.exports = Asset;