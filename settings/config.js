import Phaser from "phaser";
import LoadingScene from "/scenes/LoadingScene.js";
import TitleScene from "/scenes/TitleScene.js";
import PlayScene from "/scenes/PlayScene.js";
import UIScene from "/scenes/UIScene.js";
import CreditsScene from "/scenes/CreditsScene.js";

export var config = {
  type: Phaser.AUTO,
  parent: "game-container",
  pixelArt: true,
  zoom: 1,
  backgroundColor: "#000000",
  scene: [LoadingScene, TitleScene, PlayScene, UIScene, CreditsScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { x: 0, y: 0 }
    }
  },
  scale: {
    parent: "game-container",
    mode: Phaser.Scale.FIT,
    width: 140,
    height: 240
  }
};
