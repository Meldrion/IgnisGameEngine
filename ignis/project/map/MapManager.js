"use strict";

var readFile = require("../../engine/FileSystem.js");
var format = require("string-format");
var GameMap = require("./GameMap.js");

class MapManager {

    constructor(mapFolder, jsonFolder) {
        this.mapFolder = mapFolder;
        this.jsonFolder = jsonFolder;
        this.root = new GameMap();
    }

    find(filename) {
        return this.root.find(filename);
    }

    getRoot() {
        return this.root;
    }

    getChildren() {
        return this.root.getChildren();
    }

    addMap(map, parentId) {
        if (parentId == null) {
            this.root.addMap(map);
        } else {
            let parent = this.root.find(parentId);
            if (parent != null)
                parent.addMap(map);
        }
    }

    loadMapTree() {
        let mapTreeFile = readFile(this.jsonFolder, "maptree.json");
        let mapTreeJSON = JSON.parse(mapTreeFile);
        let maps = mapTreeJSON.maps;

        for (let i = 0; i < maps.length(); i++) {
            let currentMap = maps.get(i);
            //readMap(currentMap, null);
        }
    }

    static extractMapIdNumber(input) {
        if (input != null) {
            let pos = input.indexOf(".json");
            let numbers = input.substring("map".length, pos);
            return parseInt(numbers);
        }
        return -1;
    }

}

module.exports = MapManager;