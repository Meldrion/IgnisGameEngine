"use strict";

var PIXI = require("../modules/pixi.js");
var Game = require("./project/IgnisGame");

class Ignis {

    constructor(width,height) {

        let testGame = new Game("/home/fabien/ignis/EndlessSorrow");
        testGame.load();

        //Create the renderer
        var renderer = PIXI.autoDetectRenderer(width,height);
        //Add the canvas to the HTML document
        document.body.appendChild(renderer.view);
        //Create a container object called the `stage`
        var stage = new PIXI.Container();
        //Tell the `renderer` to `render` the `stage`
        renderer.render(stage);
    }

}

module.exports = Ignis;