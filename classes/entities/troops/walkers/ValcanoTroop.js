import Troop from "../TroopBase.js";
import DinoTroop from "./DinoTroop.js";

import Components from "../../components";
const MIXINS = [Components.CanSpawn];

class ValcanoTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(10);
    // </movement stuff>

    // <attack stuff>
    this.setOverallHealth(50);
    this.setAttackRate(2000);
    this.setAttackDamage(100);
    this.setAttackDistance(30);
    this.setCost(4);
    // </attack stuff>

    // <spawn stuff>
    this.setSpawnRate(3000);
    this.setSpawnDelay(2000);
    this.setSpawnFunc(() => {
      new DinoTroop({
        scene: this.scene,
        owner: this.owner,
        x: this.x,
        y: this.y + 10 * this.velocityDirection,
        velocityDirection: this.velocityDirection
      });
    });
    // </spawn stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = ValcanoTroop;
STATIC.ANIM_KEY_PREFIX = "troop--valcano";
STATIC.NAME = "ValcanoTroop";
STATIC.COST = 4;
STATIC.doSpawn = function(config) {
  new ValcanoTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default ValcanoTroop;
