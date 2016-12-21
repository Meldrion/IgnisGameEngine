var PIXI = require("../../../modules/pixi.js");

class Tileset {

    constructor() {
        this.index = -1;
        this.name = "";
        this.cellSize = 32;
        this.terrainCells = [null,null,null,null,null,null,null,null];
        this.collisionMatrix = [[]];
    }

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
            tmpCollisionMatrix.push(tmpInnerCollisionMatrix);
        }

        this.collisionMatrix = tmpCollisionMatrix;
    }

    inRange(x,y) {
        return x < this.getCellWidth() && y < this.getCellHeight();
    }

    setName(name) {
        this.name = name;
    }

    setIndex(index) {
        this.index = index;
    }

    loadImage(imagePath,callback) {

        let self = this;
        this.tilesetImage = PIXI.Texture.fromImage(imagePath);
        this.tilesetImage.on("update",function() {
            self.initCollisionMatrix(self.tilesetImage);
            callback();
        });
    }

    setTerrain(index,terrain) {
        this.terrainCells[index] = terrain;
    }

    setCollisionAt(x,y,collision) {
        this.collisionMatrix[x][y] = collision;
    }

    getCellWidth() {
        return this.getCellWidth(this.tilesetImage);
    }

    getCellWidth(tsImage) {
        return tsImage != null ? tsImage.width / this.cellSize : 0;
    }

    getCellHeight() {
        return this.getCellHeight(this.tilesetImage);
    }

    getCellHeight(tsImage) {
        return tsImage != null ? tsImage.height / this.cellSize + 1: 0;
    }

}

module.exports = Tileset;