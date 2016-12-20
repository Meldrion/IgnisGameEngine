var Tileset = require("./Tileset.js");

class TilesetManager {
    constructor() {
        this.tilesetList = []
    }

    setJSONFolder(jsonFolder) {
        this.jsonFolder = jsonFolder;
    }

    setTerrainFolder(terrainFolder) {
        this.terrainFolder = terrainFolder;
    }

    setTilesetFolder(tilesetFolder) {
        this.tilesetFolder = tilesetFolder;
    }

    setTilesetMax(maxCount) {

        let cMax = this.tilesetList.length;
        let tsListTMP = [];

        for (let i = 0; i < maxCount; i++) {
            if (i < cMax) {
                tsListTMP.append(this.tilesetList[i]);
            } else {
                let ts = new Tileset();
                ts.setIndex(i);
                tsListTMP.append(ts);
            }
        }

        this.tilesetList = tsListTMP;
    }
}

module.exports = TilesetManager;