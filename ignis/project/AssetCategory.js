var Asset = require("./Asset.js");
var FileSystem = require("../engine/FileSystem.js");


/**
 *
 */
class AssetCategory {

    /**
     *
     * @param assetBaseFolder
     * @param assetType
     */
    constructor(assetBaseFolder,assetType) {
        this.assetType = assetType;
        this.assetBaseFolder = assetBaseFolder;
        this.assetList = {};
    }

    /**
     *
     * @param assetName
     * @param callback
     * @returns {*}
     */
    add(assetName,callback) {
        let asset = this.assetList[assetName];

        if (asset === undefined) {
            asset = new Asset(FileSystem.convertPath(this.assetBaseFolder,assetName),this.assetType);
            asset.load(callback);
            this.assetList[assetName] = asset;
        }

        return asset;
    }

    /**
     *
     * @param assetName
     */
    remove(assetName) {
        this.assetList[assetName] = undefined;
    }

}

module.exports = AssetCategory;