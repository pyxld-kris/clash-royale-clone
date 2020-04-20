import Troop from "../TroopBase.js";
import DinoTroop from "./DinoTroop.js";

import Components from "../../components";
const MIXINS = [
  Components.CanSpawn,
  Components.IsImmovable,
  Components.HasDamagingInterval
];

class VolcanoTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <health>
    this.setOverallHealth(50);
    // </health>

    // <effect stuff>
    this.setAttentionRange(0);
    this.setEffectRange(0);
    this.setEffectRate(0);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(100);
    // </damage effect stuff>

    // <cost>
    this.setCost(4);
    // </cost>

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

const STATIC = VolcanoTroop;
STATIC.ANIM_KEY_PREFIX = "troop--volcano";
STATIC.NAME = "VolcanoTroop";
STATIC.IS_IN_DECK = true;
STATIC.COST = 4;
STATIC.doSpawn = function(config) {
  new VolcanoTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default VolcanoTroop;
