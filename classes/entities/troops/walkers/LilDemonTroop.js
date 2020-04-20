import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class LilDemonTroop extends Troop {
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
    this.setOverallHealth(50);
    // </health>

    // <effect stuff>
    this.setAttentionRange(30);
    this.setEffectRange(20);
    this.setEffectRate(500);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(10);
    // </damage effect stuff>

    // <cost>
    this.setCost(2);
    // </cost>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = LilDemonTroop;
STATIC.ANIM_KEY_PREFIX = "troop--lil-demon";
STATIC.NAME = "LilDemonTroop";
STATIC.IS_IN_DECK = true;
STATIC.COST = 2;
STATIC.doSpawn = function(config) {
  new LilDemonTroop({
    ...config,
    x: config.x - 5
  });
  new LilDemonTroop({
    ...config,
    x: config.x + 5
  });
};

export default LilDemonTroop;
