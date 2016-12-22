var Asset = require("./Asset.js");
var FileSystem = require("../engine/FileSystem.js");


/**
 *
 */
class AssetCategory {

    /**
     *
     * @param assetBaseFolder
     */
    constructor(assetBaseFolder) {
        this.assetBaseFolder = assetBaseFolder;
        this.assetList = {};
    }

    /**
     *
     * @param assetName
     * @returns {*}
     */
    add(assetName) {
        let asset = this.assetList[assetName];

        if (asset === undefined) {
            asset = new Asset(FileSystem.convertPath(this.assetBaseFolder,assetName));
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