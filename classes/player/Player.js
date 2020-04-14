import Phaser from "phaser";

import ManaBank from "../ManaBank.js";
import Tower from "../environment/Tower.js";

import { Walkers } from "../troops";

// Dynamically populate the card types from our Troop classes
const cardTypes = [];
for (const troopClass of Object.values(Walkers)) {
  cardTypes.push({
    name: troopClass.NAME,
    cost: troopClass.COST,
    doSpawn: troopClass.doSpawn
  });
}

// scene, spawnZoneX, spawnZoneY, towerX, towerY, opponent

class Player {
  constructor(
    scene,
    spawnZoneX,
    spawnZoneY,
    towerX,
    towerY,
    troopVelocityDirection,
    opponent
  ) {
    this.scene = scene;

    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const halfWorldWidth = worldWidth / 2;
    const halfWorldHeight = worldHeight / 2;

    this.troopVelocityDirection = troopVelocityDirection;
    this.opponent = opponent;

    this.troops = scene.physics.add.group();
    this.aggroAreas = scene.physics.add.group();

    //this.tower = new Tower(scene, this, towerX, towerY);
    this.towers = [
      new Tower(scene, this, towerX, towerY),
      new Tower(
        scene,
        this,
        towerX - 50,
        towerY + 20 * this.troopVelocityDirection
      ),
      new Tower(
        scene,
        this,
        towerX + 50,
        towerY + 20 * this.troopVelocityDirection
      )
    ];

    this.manaBank = new ManaBank(scene, towerX + 39, towerY);

    this.spawnZone = scene.add
      .zone(spawnZoneX, spawnZoneY, worldWidth, halfWorldHeight, 0x0000ff, 1)
      .setOrigin(0, 0);
  }

  setOpponent(opponent) {
    this.opponent = opponent;
    return this; // Return this for function chaining
  }

  spawnTroop(x, y, velocityDirection) {
    // First, let's check if this click falls within our boundaries.
    if (!Phaser.Geom.Rectangle.Contains(this.spawnZone, x, y)) return;

    // get a random card type, in the future this will be dicided by the player.
    const CardType = cardTypes[parseInt(Math.random() * cardTypes.length, 0)];

    // Secondly, check if we have enough mana.
    if (this.manaBank.getManaAmount() < CardType.cost) return;

    // then spawn the troop
    CardType.doSpawn({
      scene: this.scene,
      owner: this,
      x,
      y,
      velocityDirection
    });

    // and remove mana equal to it's cost.
    this.manaBank.deductMana(CardType.cost);
  }

  destroy() {}
}

export default Player;
