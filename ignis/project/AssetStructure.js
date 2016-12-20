"use strict";


var convertPath = require("../engine/FileSystem.js");

/**
 *
 */
class AssetStructure {

    /**
     * @return {string}
     */
    static get ASSET() {
        return "asset"
    };

    /**
     * @return {string}
     */
    static get ANIMATION() {
        return "animation"
    };

    /**
     * @return {string}
     */
    static get BACKGROUNDMUSIC() {
        return "bgm"
    };

    /**
     * @return {string}
     */
    static get BATTLEBACKGROUND() {
        return "battlebackground"
    };

    /**
     * @return {string}
     */
    static get BATTLESPRITE() {
        return "battlesprite"
    };

    /**
     * @return {string}
     */
    static get CHARACTER() {
        return "character"
    };

    /**
     * @return {string}
     */
    static get JSON() {
        return "json"
    };

    /**
     * @return {string}
     */
    static get OVERLAY() {
        return "overlay"
    };

    /**
     * @return {string}
     */
    static get MAP() {
        return "map"
    };

    /**
     * @return {string}
     */
    static get GAMEOVER() {
        return "gameover"
    };

    /**
     * @return {string}
     */
    static get SCENEBACKGROUND() {
        return "scenebackground"
    };

    /**
     * @return {string}
     */
    static get SCRIPT() {
        return "script"
    };

    /**
     * @return {string}
     */
    static get SOUNDEFFECT() {
        return "soundeffect"
    };

    /**
     * @return {string}
     */
    static get TILESET() {
        return "tileset"
    };

    /**
     * @return {string}
     */
    static get TERRAIN() {
        return "terrain"
    };

    /**
     * @return {string}
     */
    static get TITLE() {
        return "title"
    };

    /**
     * @return {string}
     */
    static get UI() {
        return "ui"
    };

    /**
     *
     * @param rootPath
     */
    constructor(rootPath) {
        this.rootPath = rootPath;
    }

    /**
     *
     * @returns {Array}
     */
    static getAssetFolderNames() {

        let assetNames = [];

        assetNames.push(AssetStructure.ANIMATION);
        assetNames.push(AssetStructure.BACKGROUNDMUSIC);
        assetNames.push(AssetStructure.BATTLESPRITE);
        assetNames.push(AssetStructure.CHARACTER);
        assetNames.push(AssetStructure.JSON);
        assetNames.push(AssetStructure.OVERLAY);
        assetNames.push(AssetStructure.MAP);
        assetNames.push(AssetStructure.GAMEOVER);
        assetNames.push(AssetStructure.SCENEBACKGROUND);
        assetNames.push(AssetStructure.SCRIPT);
        assetNames.push(AssetStructure.SOUNDEFFECT);
        assetNames.push(AssetStructure.TILESET);
        assetNames.push(AssetStructure.TERRAIN);
        assetNames.push(AssetStructure.TITLE);
        assetNames.push(AssetStructure.UI);

        return assetNames;
    }

    /**
     *
     * @param original
     * @returns {*}
     */
    static capitalizeFirstLetter(original) {
        if (original == null || original.length == 0) {
            return original;
        }
        return original.substring(0, 1).toUpperCase() + original.substring(1);
    }

    /**
     *
     * @returns {*}
     */
    static getAssetNames() {

        let assetNames = AssetStructure.getAssetFolderNames();
        for (let i = 0; i < assetNames.size(); i++) {
            assetNames[i] = AssetStructure.capitalizeFirstLetter(assetNames[i]);
        }

        return assetNames;
    }

    /**
     *
     * @param category
     * @returns {boolean}
     */
    static isAudio(category) {
        return category != null &&
            (category.toLowerCase() === AssetStructure.BACKGROUNDMUSIC.toLowerCase()
            || category.toLowerCase() === AssetStructure.SOUNDEFFECT.toLowerCase());
    }

    /**
     *
     * @param category
     * @returns {boolean}
     */
    static isImage(category) {

        if (category != null) {

            let valid = !AssetStructure.isAudio(category);
            valid &= !(category.toLowerCase() === AssetStructure.SCRIPT.toLowerCase());
            valid &= !(category.toLowerCase() === AssetStructure.JSON.toLowerCase());
            valid &= !(category.toLowerCase() === AssetStructure.MAP.toLowerCase());
            return valid;

        } else {
            return false;
        }
    }

    /**
     *
     * @param category
     * @returns {boolean}
     */
    static isScript(category) {
        return category != null && category.toLowerCase() === AssetStructure.SCRIPT.toLowerCase();
    }

    /**
     *
     * @param category
     * @returns {boolean}
     */
    static isJSON(category) {
        return category != null && (category.toLowerCase() === AssetStructure.JSON.toLowerCase()
            || category.toLowerCase() === AssetStructure.MAP.toLowerCase());
    }

    /**
     *
     * @returns {Array.<T>|Buffer|string}
     */
    getAsset() {
        return convertPath(this.rootPath, AssetStructure.ASSET);
    }

    /**
     *
     * @param assetName
     * @returns {Array.<T>|Buffer|string}
     */
    getPath(assetName) {
        return convertPath(this.getAsset(), assetName != null ? assetName.toLowerCase() : "not valid");
    }

    /**
     *
     * @returns {Array.<T>|Buffer|string}
     */
    getProjectJSON() {
        return convertPath(this.rootPath, "project.json");
    }

}

module.exports = AssetStructure;
