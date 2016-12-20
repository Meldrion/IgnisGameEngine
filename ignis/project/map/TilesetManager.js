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

        let jsonFile = FileSystem.readFile(this.jsonFolder, TilesetManager.TILETREEFILE);
        console.log(jsonFile);
        let tilesetListJSON = JSON.parse(jsonFile);

        this.setTilesetMax(tilesetListJSON.tilesets.length);

        for (let i = 0; i < tilesetListJSON.tilesets.length; i++) {

            let tileset = tilesetListJSON.tilesets[i];
            let current = this.tilesetList[i];

            current.setIndex(i);
            current.setName(tileset.name);

            current.loadImage(FileSystem.convertPath(this.tilesetFolder,tileset.image));
            let terrains = tileset.terrain;

            for (let ti = 0; ti < terrains.length; ti++) {

                let currentTerrainJson = terrains[i];
                let terrainIndexTileset = currentTerrainJson.index;
                let fileName = currentTerrainJson.filename;
                let newTerrain = new Terrain();

                newTerrain.loadImage(FileSystem.convertPath(this.terrainFolder, fileName));
                current.setTerrain(terrainIndexTileset, newTerrain);
            }

            for (let j = 0; j < tileset.blocking.length; j++) {

                let collisionLine = tileset.blocking[j];
                let x = collisionLine.x;
                let y = collisionLine.y;
                current.setCollisionAt(x, y, true);
            }
        }
    }

}

module.exports = TilesetManager;