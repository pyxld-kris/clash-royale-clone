import Phaser from "phaser";

import ManaBank from "./ManaBank.js";
import Tower from "../classes/environment/Tower.js";

import { Walkers } from './troops';

import {
  gameWidth, gameHeight,
  halfGameWidth, halfGameHeight
} from '../constants';

const cardTypes = [
  {
    name: 'EvilTroop',
    spawn: (config) => {
      new Walkers.EvilTroop(config);
    }
  },
  {
    name: 'LilDemonTroop',
    spawn: (config) => {
      Walkers.LilDemonTroop(config);
      Walkers.LilDemonTroop({
        ...config,
        x: config.x + 10
      });
    }
  }
];

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

    // First, let's check if this click falls within our boundaries.
    if (!Phaser.Geom.Rectangle.Contains(this.spawnZone, x, y)) return;

    // Secondly, check if we have enough mana.
    if (this.manaBank.getManaAmount() < cost) return;

    // get a random card type, in the future this will be dicided by the player.
    const CardType = spawnTypes[parseInt(Math.random() * spawnTypes.length, 0)];

    // then spawn the troop
    CardType.spawn({ scene: this.scene, owner: this, x, y, velocityDirection });

    // and remove mana equal to it's cost.
    this.manaBank.deductMana(cost);
  }

  destroy() {}
}

export default Player;
