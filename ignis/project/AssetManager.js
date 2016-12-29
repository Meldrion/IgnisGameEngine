"use strict";

var AssetStructure = require("./AssetStructure");
var AssetCategory = require("./AssetCategory");
var Asset = require("./Asset.js");

/**
 *
 */
class AssetManager {

    /**
     *
     * @param assetStructure
     */
    constructor(assetStructure) {
        this.assetStructure = assetStructure;
        this.assetList = {};

        let assetFolderNames = AssetStructure.getAssetFolderNames();
        for (let i=0;i<assetFolderNames.length;i++) {
            let folderName = assetFolderNames[i];
            this.assetList[folderName] = new AssetCategory(this.assetStructure.getPath(folderName),folderName);
        }
    }

    /**
     * Get an Asset from the Asset Manager
     * if the asset does not exist, it will be created
     * @param assetType
     * @param assetName
     * @param callback
     */
    loadAsset(assetType,assetName,callback) {
        let assetCategory = this.assetList[assetType];
        return assetCategory.add(assetName,callback);
    }


    /**
     *
     * @param assetType
     * @param assetName
     */
    killAsset(assetType,assetName) {
        let assetCategory = this.assetList[assetType];
        return assetCategory.remove(assetName);
    }

}

module.exports = AssetManager;