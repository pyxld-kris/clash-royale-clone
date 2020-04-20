import Phaser from "phaser";
import LoadingScene from "../scenes/LoadingScene.js";
import TitleScene from "../scenes/TitleScene.js";
import PlayScene from "../scenes/PlayScene.js";
import UIScene from "../scenes/UIScene.js";
import CreditsScene from "../scenes/CreditsScene.js";
import WinScene from "../scenes/WinScene.js";
import LoseScene from "../scenes/LoseScene.js";

export var config = {
  type: Phaser.AUTO,
  parent: "game-container",
  pixelArt: true,
  zoom: 1,
  backgroundColor: "#000000",
  scene: [
    LoadingScene,
    TitleScene,
    PlayScene,
    UIScene,
    CreditsScene,
    WinScene,
    LoseScene
  ],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: {
        x: 0,
        y: 0
      }
    }
  },
  scale: {
    parent: "game-container",
    mode: Phaser.Scale.FIT,
    width: 160,
    height: 265
    /*
    width: 140,
    height: 240
    */
  }
};
