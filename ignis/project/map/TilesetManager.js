"use strict";

var Tileset = require("./Tileset.js");
var Terrain = require("./Terrain.js");
var FileSystem = require("../../engine/FileSystem.js");

/**
 *
 */
class TilesetManager {

    /**
     * @return {string}
     */
    static get TILETREEFILE() {
        return "tiletree.json";
    }

    /**
     *
     */
    constructor() {
        this.tilesetList = []
    }

    /**
     *
     * @param jsonFolder
     */
    setJSONFolder(jsonFolder) {
        this.jsonFolder = jsonFolder;
    }

    /**
     *
     * @param terrainFolder
     */
    setTerrainFolder(terrainFolder) {
        this.terrainFolder = terrainFolder;
    }

    /**
     *
     * @param tilesetFolder
     */
    setTilesetFolder(tilesetFolder) {
        this.tilesetFolder = tilesetFolder;
    }

    /**
     *
     * @param maxCount
     */
    setTilesetMax(maxCount) {

        let cMax = this.tilesetList.length;
        let tsListTMP = [];

        for (let i = 0; i < maxCount; i++) {
            if (i < cMax) {
                tsListTMP.push(this.tilesetList[i]);
            } else {
                let ts = new Tileset();
                ts.setIndex(i);
                tsListTMP.push(ts);
            }
        }

        this.tilesetList = tsListTMP;
    }

    /**
     *
     * @param tileset
     * @param index
     */
    setTileset(tileset, index) {
        if (tileset != null) {
            tileset.setIndex(index);
        }
        this.tilesetList[index] = tileset;
    }

    /**
     *
     * @param index
     * @returns {null}
     */
    getTilesetAtIndex(index) {
        return index > -1 ? this.tilesetList[index] : null;
    }

    /**
     *
     */
    load() {

        let self = this;
        let jsonFile = FileSystem.readFile(this.jsonFolder, TilesetManager.TILETREEFILE);
        let tilesetListJSON = JSON.parse(jsonFile);

        this.setTilesetMax(tilesetListJSON.tilesets.length);

        for (let i = 0; i < tilesetListJSON.tilesets.length; i++) {

            let tilesetJSON = tilesetListJSON.tilesets[i];
            let current = this.tilesetList[i];

            current.setIndex(i);
            current.setName(tilesetJSON.name);

            if (tilesetJSON.image && tilesetJSON.image.length !== null) {
                current.loadImage(FileSystem.convertPath(this.tilesetFolder, tilesetJSON.image), function () {
                    self.loadCollisionData(current, tilesetJSON);
                });
            }

/*            // Load the Terrain Data
            let terrains = tilesetJSON.terrain;

            for (let ti = 0; ti < terrains.length; ti++) {

                let currentTerrainJson = terrains[i];
                let terrainIndexTileset = currentTerrainJson.index;
                let newTerrain = new Terrain();

                newTerrain.loadImage(FileSystem.convertPath(this.terrainFolder, currentTerrainJson.filename));
                current.setTerrain(terrainIndexTileset, newTerrain);
            }*/
        }
    }

    loadCollisionData(current,tilesetJSON) {

        for (let j = 0; j < tilesetJSON.blocking.length; j++) {

            let collisionLine = tilesetJSON.blocking[j];
            let x = collisionLine.x;
            let y = collisionLine.y;
            current.setCollisionAt(x, y, true);
        }
    }

}

module.exports = TilesetManager;