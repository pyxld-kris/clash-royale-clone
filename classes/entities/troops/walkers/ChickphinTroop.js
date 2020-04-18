import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class ChickphinTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(8);
    // </movement stuff>

    // <health>
    this.setOverallHealth(200);
    // </health>

    // <effect stuff>
    this.setAttentionRange(40);
    this.setEffectRange(20);
    this.setEffectRate(1500);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(50);
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

const STATIC = ChickphinTroop;
STATIC.ANIM_KEY_PREFIX = "troop--chickphin";
STATIC.NAME = "ChickphinTroop";
STATIC.COST = 6;
STATIC.doSpawn = function(config) {
  new ChickphinTroop(config);
};

export default ChickphinTroop;
