import Phaser from "phaser";

import ControlledPlayer from "../classes/ControlledPlayer.js";
import ComputerPlayer from "../classes/ComputerPlayer.js";

import Tree from "../classes/environment/Tree.js";
import TreeTrunk from "../classes/environment/TreeTrunk.js";
import Rock from "../classes/environment/Rock.js";
import Grass from "../classes/environment/Grass.js";

import WeatherSystem from "../weather";

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    // Start UIScene, which will layer on top of PlayScene
    this.scene.run("UIScene");

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
        let thisTroop = aggroArea.troop;
        this.initiateTroopAttack(thisTroop, enemyTroop);
      }
    );

    // Set up player troops attacking opponent troops
    this.physics.add.overlap(
      this.player.aggroAreas,
      this.opponent.troops,
      (aggroArea, enemyTroop) => {
        let thisTroop = aggroArea.troop;
        this.initiateTroopAttack(thisTroop, enemyTroop);
      }
    );

    this.generateTerrain();
    this.weather = new WeatherSystem(this);
  }

  initiateTroopAttack(attacker, target) {
    if (attacker.canAttack()) {
      attacker.startAttacking(target);
    }
  }

  generateTerrain() {
    // Create environment objects
    const worldWidth = this.physics.world.bounds.width;
    const worldHeight = this.physics.world.bounds.height;

    // Create 10 randomly positioned trees
    this.trees = [];
    for (let i = 0; i < 3; i++) {
      let treeX = parseInt(Math.random() * worldWidth, 0);
      let treeY = parseInt(Math.random() * worldHeight, 0);
      this.trees.push(new Tree(this, treeX, treeY));
    }

    // Create 10 randomly positionedtree trunks
    this.treeTrunks = [];
    for (let i = 0; i < 2; i++) {
      let treeTrunkX = parseInt(Math.random() * worldWidth, 0);
      let treeTrunkY = parseInt(Math.random() * worldHeight, 0);
      this.treeTrunks.push(new TreeTrunk(this, treeTrunkX, treeTrunkY));
    }

    // Create 20 randomly positioned rocks
    this.rocks = [];
    for (let i = 0; i < 7; i++) {
      let rockX = parseInt(Math.random() * worldWidth, 0);
      let rockY = parseInt(Math.random() * worldHeight, 0);
      this.rocks.push(new Rock(this, rockX, rockY));
    }

    // Create 20 randomly positioned grass
    this.grass = [];
    for (let i = 0; i < 8; i++) {
      let grassX = parseInt(Math.random() * worldWidth, 0);
      let grassY = parseInt(Math.random() * worldHeight, 0);
      this.grass.push(new Grass(this, grassX, grassY));
    }
  }

  update(time, delta) {
    //console.log("playscene update");
  }

  destroy() {
    clearTimeout(this.backgroundAnimInterval);
    this.player.destroy();
    this.opponent.destroy();
    super.destroy();
  }
}
