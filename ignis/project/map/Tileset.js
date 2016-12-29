"use strict";

var AssetManager = require("../AssetManager.js");

class Tileset {

    /**
     *
     */
    constructor() {
        this.tilesetImage = null;
        this.index = -1;
        this.name = "";
        this.cellSize = 32;
        this.terrainCells = new Array(8);
        this.collisionMatrix = [[]];
    }

    /**
     *
     * @param newImage
     */
    initCollisionMatrix(newImage) {

        let tmpCollisionMatrix = new Array(this.getCellWidth(newImage));

        for (let x = 0;x < tmpCollisionMatrix.length;x++) {
            let tmpInnerCollisionMatrix = new Array(this.getCellHeight(newImage));

            for (let y = 0;y < tmpInnerCollisionMatrix.length;y++) {

                if (this.collisionMatrix != null && this.inRange(x,y)) {
                    tmpInnerCollisionMatrix[y] = this.collisionMatrix[x][y];
                } else {
                    tmpInnerCollisionMatrix[y] = false;
                }
            }

            tmpCollisionMatrix[x] = tmpInnerCollisionMatrix;
        }

        this.collisionMatrix = tmpCollisionMatrix;
    }

    /**
     *
     * @param x
     * @param y
     * @returns {boolean}
     */
    inRange(x,y) {
        return x < this.getCellWidth() && y < this.getCellHeight();
    }

    /**
     *
     * @param name
     */
    setName(name) {
        this.name = name;
    }

    /**
     *
     * @param index
     */
    setIndex(index) {
        this.index = index;
    }

    /**
     *
     * @param assetManager
     * @param imageName
     * @param callback
     */
    setImage(image) {
        this.tilesetImage = image;
        this.initCollisionMatrix(this.tilesetImage);
    }

    /**
     *
     * @param index
     * @param terrain
     */
    setTerrain(index,terrain) {
        this.terrainCells[index] = terrain;
    }

    /**
     *
     * @param x
     * @param y
     * @param collision
     */
    setCollisionAt(x,y,collision) {
        this.collisionMatrix[x][y] = collision;
    }

    /**
     *
     * @returns {*}
     */
    getCellWidth() {
        return this.getCellWidth(this.tilesetImage);
    }

    /**
     *
     * @param tsImage
     * @returns {number}
     */
    getCellWidth(tsImage) {
        return tsImage != null ? tsImage.width / this.cellSize : 0;
    }

    /**
     *
     * @returns {*}
     */
    getCellHeight() {
        return this.getCellHeight(this.tilesetImage);
    }

    /**
     *
     * @param tsImage
     * @returns {number}
     */
    getCellHeight(tsImage) {
        return tsImage != null ? tsImage.height / this.cellSize + 1: 0;
    }

}

module.exports = Tileset;