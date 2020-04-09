import Phaser from "phaser";

import ManaBank from "./ManaBank.js";
import Tower from "../classes/environment/Tower.js";

import { Troops } from './troops';

import {
  gameWidth, gameHeight,
  halfGameWidth, halfGameHeight
} from '../constants';

const spawnTypes = [EvilTroop, LilDemonTroop];

// scene, spawnZoneX, spawnZoneY, towerX, towerY, opponent

class Player {
  constructor(scene, spawnZoneX, spawnZoneY, towerX, towerY, opponent) {
    this.scene = scene;

    this.opponent = opponent;
    this.troops = scene.physics.add.group();
    this.aggroAreas = scene.physics.add.group();

    this.tower = new Tower(scene, this, towerX, towerY);

    this.manaBank = new ManaBank(scene, towerX + 39, towerY);

    this.spawnZone = scene.add
      .zone(spawnZoneX, spawnZoneY, gameWidth, halfGameHeight, 0x0000ff, 1)
      .setOrigin(0, 0);
  }

  setOpponent(opponent) {
    this.opponent = opponent;
    return this; // Return this for function chaining
  }

  spawnTroop(x, y, cost, velocityDirection) {
    // First, let's check if this click falls within our boundaries

    if (!Phaser.Geom.Rectangle.Contains(this.spawnZone, x, y)) return;

    if (this.manaBank.getManaAmount() < cost) return;

    console.log("before random troop");
    let thisTroopData =
      spawnTypes[parseInt(Math.random() * spawnTypes.length, 0)];
    let troopType = thisTroopData.class;
    console.log("before loop");
    for (let i = 0; i < thisTroopData.numToSpawn; i++) {
      console.log("in loop");
      const thisTroop = new troopType(
        this.scene,
        this,
        x + i * 10,
        y,
        velocityDirection
      );

    }
    console.log("before deduct");

    this.manaBank.deductMana(cost);
  }

  destroy() {}
}

export default Player;
