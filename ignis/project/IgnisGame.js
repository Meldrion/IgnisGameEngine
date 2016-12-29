"use strict";

var MapManager = require("./map/MapManager");
var TilesetManager = require("./map/TilesetManager");
var AssetStructure = require("./AssetStructure.js");
var AssetManager = require("./AssetManager.js");

/**
 *
 */
class IgnisGame {

    constructor(basePath) {
        this.assetStructure = new AssetStructure(basePath);
        this.assetManager = new AssetManager(this.assetStructure);
        this.mapManager = new MapManager(this.assetStructure.getPath(AssetStructure.MAP),
            this.assetStructure.getPath(AssetStructure.JSON));
        this.tilesetManager = new TilesetManager(this.assetManager);
        this.tilesetManager.setJSONFolder(this.assetStructure.getPath(AssetStructure.JSON));
        this.rootPath = basePath;
    }

    load() {
        this.tilesetManager.load();
    }


}

module.exports = IgnisGame;