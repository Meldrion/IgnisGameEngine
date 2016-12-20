"use strict";

var MapManager = require("./map/MapManager");
var TilesetManager = require("./map/TilesetManager");
var AssetStructure = require("./AssetStructure.js");

/**
 *
 */
class IgnisGame {

    constructor(basePath) {
        this.assetStructure = new AssetStructure(basePath);
        this.mapManager = new MapManager(this.assetStructure.getPath(AssetStructure.MAP),
            this.assetStructure.getPath(AssetStructure.JSON));
        this.tilesetManager = new TilesetManager();
        this.tilesetManager.setTilesetFolder(this.assetStructure.getPath(AssetStructure.TILESET));
        this.tilesetManager.setTerrainFolder(this.assetStructure.getPath(AssetStructure.TERRAIN));
        this.tilesetManager.setJSONFolder(this.assetStructure.getPath(AssetStructure.JSON));

        this.rootPath = basePath;
    }

}

module.exports = IgnisGame;