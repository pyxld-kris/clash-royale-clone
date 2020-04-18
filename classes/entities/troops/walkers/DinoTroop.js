import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class DinoTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(20);
    // </movement stuff>

    // <health>
    this.setOverallHealth(10);
    // </health>

    // <effect stuff>
    this.setAttentionRange(20);
    this.setEffectRange(15);
    this.setEffectRate(200);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(5);
    // </damage effect stuff>

    // <cost>
    this.setCost(1);
    // </cost>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = DinoTroop;
STATIC.ANIM_KEY_PREFIX = "troop--dino";
STATIC.NAME = "DinoTroop";
STATIC.COST = 1;
STATIC.doSpawn = function(config) {
  new DinoTroop(config);
};

export default DinoTroop;
