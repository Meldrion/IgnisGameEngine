"use strict";

var AssetStructure = require("./AssetStructure");
var AssetCategory = require("./AssetCategory");
var Asset = require("./Asset.js");

class AssetManager {

    constructor(assetStructure) {
        this.assetStructure = assetStructure;
        this.assetList = {};

        let assetFolderNames = AssetStructure.getAssetFolderNames();
        for (let i=0;i<assetFolderNames.length;i++) {
            this.assetList[assetFolderNames[i]] = new AssetCategory();
        }
    }

    loadAsset(assetType,assetName) {
        let assetCategory = this.assetList[assetType];
    }

}

module.exports = AssetManager;