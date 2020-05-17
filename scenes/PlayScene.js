import { Phaser, Scene } from "phaser";

import genAnims from "../helpers/generateAnimations";
import Player from "../classes/Player/Player";

import monsterImages from "../assets/npcs/monsters";

import { EventActor } from "../classes/EventLog/EventLog.js";

export default class PlayScene extends Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    try {
      EventActor.generateRandomActor();

      // Start UIScene, which will layer on top of PlayScene
      this.scene.run("UIScene");

      // helper function to generate our sprite anims
      genAnims(this);

      const gameWidth = this.game.config.width;
      const gameHeight = this.game.config.height;
      const halfGameWidth = gameWidth / 2;
      const halfGameHeight = gameHeight / 2;

      this.camera = this.cameras.main;
      this.camera.setBounds(
        0,
        0,
        this.game.config.width,
        this.game.config.height
      );

      // Begin game specific setup

      //this.add.sprite(halfGameWidth, halfGameHeight, "home");

      this.player = new Player(this);

      window.player = this.player; // For console access
    } catch (e) {
      console.error(e);
    }
  }

  update(time, delta) {}

  destroy() {
    super.destroy();
  }
}
