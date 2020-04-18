import Troop from "../TroopBase.js";
import MagicPuppyTroop from "./MagicPuppyTroop.js";

import Components from "../../components";
const MIXINS = [Components.CanSpawn];

class WitchTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(10);
    // </movement stuff>

    // <health>
    this.setOverallHealth(50);
    // </health>

    // <effect stuff>
    this.setAttentionRange(40);
    this.setEffectRange(40);
    this.setEffectRate(2000);
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
      new MagicPuppyTroop({
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

const STATIC = WitchTroop;
STATIC.ANIM_KEY_PREFIX = "troop--witch";
STATIC.NAME = "WitchTroop";
STATIC.COST = 4;
STATIC.doSpawn = function(config) {
  new WitchTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default WitchTroop;
