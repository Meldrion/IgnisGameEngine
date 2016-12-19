"use strict";
var readFile = require("../../engine/FileSystem.js");
var format = require("string-format");
var Layer = require("./Layer");

class GameMap {

    constructor() {
        this.width = 20;
        this.height = 15;
        this.layers = [];

        for (let i=0;i<3;i++) {
            this.layers.push(new Layer(this.width,this.height));
        }

        this.name = "";
        this.filename = "";
        this.submaps = [];
        this.parent = null;
    }

    setName(name) {
        this.name = name;
    }

    setFilename(filename) {
        this.filename = filename;
    }

    setDimension(width,height) {
        this.width = width;
        this.height = height;
    }

    load() {
        let file = readFile("basePath", this.name);
        let mapData = JSON.parse(file);

        this.setName(mapData.name);
        this.setDimension(mapData.width,mapData.height);

        for (let i = 0, len = mapData.layers.length; i < len; i++) {
            let layer = mapData.layers[i];
        }
    }

    save()  {

    }

    find(filename) {

        let index = 0;
        let maxIndex = this.submaps.length;
        let foundMap = this.filename == filename ? this : null;

        while (foundMap == null && index < maxIndex) {
            foundMap = this.children[index].find(filename);
            index++;
        }

        return foundMap;
    }

    getChildren() {
        return this.children;
    }

    addMap(map) {

        // Check if the Map is not already port of the Array
        if (this.children.indexOf(map) == -1) {
            this.children.push(map);
            map.parent = this;
        }

    }

}

module.exports = GameMap;