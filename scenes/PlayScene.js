import { Scene } from "phaser";

import ControlledPlayer from "../classes/ControlledPlayer.js";
import ComputerPlayer from "../classes/ComputerPlayer.js";

import WeatherSystem from "../weather";

import genAnims from '../helpers/generateAnimations';
import genTerrain from '../helpers/generateTerrain';

export default class PlayScene extends Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    // Start UIScene, which will layer on top of PlayScene
    this.scene.run("UIScene");

    // helper function to generate our sprite anims
    genAnims(this);

    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;
    const halfGameWidth = gameWidth / 2;
    const halfGameHeight = gameHeight / 2;

    // Set the physics world size
    this.physics.world.setBounds(
      0,
      0,
      this.game.config.width,
      this.game.config.height
    );

    this.camera = this.cameras.main;
    this.camera.setBounds(
      0,
      0,
      this.physics.world.bounds.width,
      this.physics.world.bounds.height
    );

    // Create background, and do really simple animation
    this.background = this.add
      .sprite(halfGameWidth, this.game.config.height, "background")
      .setOrigin(0.5, 0.5)
      .setTint(0x228800);

    this.player = new ControlledPlayer(this);
    this.opponent = new ComputerPlayer(this);

    this.player.setOpponent(this.opponent);
    this.opponent.setOpponent(this.player);

    // Set up opponent troops attacking player troops
    this.physics.add.overlap(
      this.opponent.aggroAreas,
      this.player.troops,
      (aggroArea, enemyTroop) => {
        const thisTroop = aggroArea.troop;
        thisTroop.initiateAttack(enemyTroop);
      }
    );

    // Set up player troops attacking opponent troops
    this.physics.add.overlap(
      this.player.aggroAreas,
      this.opponent.troops,
      (aggroArea, enemyTroop) => {
        const thisTroop = aggroArea.troop;
        thisTroop.initiateAttack(enemyTroop);
      }
    );

    genTerrain(this);

    // add these colliders here to the groups instead of 
    // in each troop creation for code cleanup.
    this.physics.add.collider(this.player.troops, this.trees);
    this.physics.add.collider(this.opponent.troops, this.trees);
    this.physics.add.collider(this.player.troops, this.opponent.troops);
    this.physics.add.collider(this.player.troops, this.player.troops);
    this.physics.add.collider(this.opponent.troops, this.opponent.troops);

    this.weather = new WeatherSystem(this);
  }

  update(time, delta) {}

  destroy() {
    this.player.destroy();
    this.opponent.destroy();
    super.destroy();
  }
}
