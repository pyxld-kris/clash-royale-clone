import Phaser from "phaser";

import Tower from "../entities/environment/Tower.js";

import { Walkers } from "../entities/troops";

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
    this.towers = scene.physics.add.staticGroup();
    this.towers.addMultiple([
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
    ]);

    this.spawnZone = scene.add
      .zone(spawnZoneX, spawnZoneY, worldWidth, halfWorldHeight, 0x0000ff, 1)
      .setOrigin(0, 0);
  }

  setOpponent(opponent) {
    this.opponent = opponent;
    return this; // Return this for function chaining
  }

  // Returns true if troop is spawned, and false otherwise
  spawnTroop(x, y, velocityDirection, troopClass) {
    try {
      // First, let's check if this click falls within our boundaries.
      if (!Phaser.Geom.Rectangle.Contains(this.spawnZone, x, y)) return;

      // get a random card type, in the future this will be decided by the player.
      let CardType = cardTypes[parseInt(Math.random() * cardTypes.length, 0)];

      // if we passed in an explicit troop type...
      if (troopClass) {
        CardType = {
          name: troopClass.NAME,
          cost: troopClass.COST,
          doSpawn: troopClass.doSpawn
        };
      }

      // Secondly, check if we have enough mana.
      if (this.manaBank.getManaAmount() < CardType.cost) return false;
      console.log("doing spawn", CardType.name);
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
      console.log("did spawn");
      return true;
    } catch (e) {
      console.error(e);
    }
  }

  destroy() {}
}

export default Player;
