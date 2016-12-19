
var  MapManager = require("./map/MapManager");

class IgnisGame {

    constructor(basePath) {
        this.mapManager = new MapManager("","");
    }

}

module.exports = IgnisGame;