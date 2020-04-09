import Phaser from "phaser";

import ManaBank from "../classes/ManaBank.js";
import Tower from "../classes/environment/Tower.js";
import EvilTroop from "../classes/actor/EvilTroop.js";
import LilDemonTroop from "../classes/actor/LilDemonTroop.js";

export default class Player {
  constructor(scene, spawnZoneX, spawnZoneY, towerX, towerY, opponent) {
    this.scene = scene;

    //this.troops = [];
    this.troops = scene.physics.add.group();
    this.aggroAreas = scene.physics.add.group();
    this.opponent = opponent;

    const gameWidth = scene.game.config.width;
    const gameHeight = scene.game.config.height;
    const halfGameWidth = gameWidth / 2;
    const halfGameHeight = gameHeight / 2;

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

    if (Phaser.Geom.Rectangle.Contains(this.spawnZone, x, y)) {
      console.log("adding troop");
      if (this.manaBank.getManaAmount() >= cost) {
        console.log("before spawn types");
        const spawnTypes = [
          {
            class: EvilTroop,
            numToSpawn: 1
          },
          {
            class: LilDemonTroop,
            numToSpawn: 2
          }
        ];
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

          //this.troops.push(thisTroop);
          console.log("before collider");
          // Set up collision with tower
          this.scene.physics.add.collider(
            thisTroop,
            this.opponent.tower,
            (troop, tower) => {
              tower.doDamage(1);
            }
          );
        }
        console.log("before deduct");
        //new Rock(this, x, y);
        this.manaBank.deductMana(cost);
      }
    }
  }

  destroy() {
    super.destroy();
  }
}
