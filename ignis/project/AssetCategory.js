class AssetCategory {

    constructor() {
        this.assetList = {};
    }

    add(assetName,asset) {
        if (this.assetList[assetName] === undefined) {
            console.log("Key does not exist");
        }
    }

}

module.exports = AssetCategory;