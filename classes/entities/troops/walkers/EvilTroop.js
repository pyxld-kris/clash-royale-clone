import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class EvilTroop extends Troop {
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
    this.setOverallHealth(200);
    // </health>

    // <effect stuff>
    this.setAttentionRange(50);
    this.setEffectRange(20);
    this.setEffectRate(1500);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(20);
    // </damage effect stuff>

    // <cost>
    this.setCost(3);
    // </cost>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = EvilTroop;
STATIC.ANIM_KEY_PREFIX = "troop--evil";
STATIC.NAME = "EvilTroop";
STATIC.COST = 5;
STATIC.doSpawn = function(config) {
  new EvilTroop(config);
};

export default EvilTroop;
