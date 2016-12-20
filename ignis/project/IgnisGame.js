
var MapManager = require("./map/MapManager");
var TilesetManager = require("./map/TilesetManager");

class IgnisGame {

    constructor(basePath) {
        this.mapManager = new MapManager("","");
        this.tilesetManager = new TilesetManager("");
    }

}

module.exports = IgnisGame;