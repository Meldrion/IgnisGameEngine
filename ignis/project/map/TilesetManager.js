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

    setTileset(tileset,index) {
        if (tileset != null) {
            tileset.setIndex(index);
        }
        this.tilesetList[index] = tileset;
    }

    getTilesetAtIndex(index) {
        return index > -1 ? this.tilesetList[index] : null;
    }

}

module.exports = TilesetManager;