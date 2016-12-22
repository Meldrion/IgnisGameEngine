"use strict";

var PIXI = require("../modules/pixi.js");
var Game = require("./project/IgnisGame");

class Ignis {

    constructor(width,height) {

        let testGame = new Game("/home/fabien/ignis/EndlessSorrow");
        testGame.load();

        //Create the renderer
        this.renderer = PIXI.autoDetectRenderer(width,height);
        //Add the canvas to the HTML document
        document.body.appendChild(this.renderer.view);
        //Create a container object called the `stage`
        this.stage = new PIXI.Container();

       // create a texture from an image path
        var texture = PIXI.Texture.fromImage('./res/cave.png');

        // create a new Sprite using the texture
        var testImage = new PIXI.Sprite(texture);

        this.stage.addChild(testImage);
        this.render();

    }

    render() {

        //Tell the `renderer` to `render` the `stage`
        this.renderer.render(this.stage);
        let self = this;

        // The callback has to be a function, this is why we need to wrap the
        // render object method in a function
        requestAnimationFrame(function() {
            self.render();
        });

    }

}

module.exports = Ignis;