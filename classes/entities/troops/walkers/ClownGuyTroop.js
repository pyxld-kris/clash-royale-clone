import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class ClownGuyTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(17);
    // </movement stuff>

    // <health>
    this.setOverallHealth(10);
    // </health>

    // <effect stuff>
    this.setAttentionRange(30);
    this.setEffectRange(20);
    this.setEffectRate(1000);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(10);
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

const STATIC = ClownGuyTroop;
STATIC.ANIM_KEY_PREFIX = "troop--clown-guy";
STATIC.NAME = "ClownGuyTroop";
STATIC.COST = 1;
STATIC.doSpawn = function(config) {
  new ClownGuyTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default ClownGuyTroop;
