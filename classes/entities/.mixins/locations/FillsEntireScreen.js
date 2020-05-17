// FillsEntireScreen: Makes entity the exact width and height of the game

import Phaser from "phaser";

class FillsEntireScreen {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

FillsEntireScreen.methods = {
  // Called when an entity with this mixin is created
  _init() {
    let gameWidth = this.scene.game.config.width;
    let gameHeight = this.scene.game.config.height;
    this.setSize(gameWidth, gameHeight);
    this.setPosition(gameWidth / 2, gameHeight / 2);
  }
};

export default FillsEntireScreen;
