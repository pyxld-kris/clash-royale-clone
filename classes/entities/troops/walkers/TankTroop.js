import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class TankTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(5);
    // </movement stuff>

    // <health>
    this.setOverallHealth(200);
    // </health>

    // <effect stuff>
    this.setAttentionRange(50);
    this.setEffectRange(50);
    this.setEffectRate(3000);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(200);
    // </damage effect stuff>

    // <cost>
    this.setCost(6);
    // </cost>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = TankTroop;
STATIC.ANIM_KEY_PREFIX = "troop--tank";
STATIC.NAME = "TankTroop";
STATIC.IS_IN_DECK = true;
STATIC.COST = 6;
STATIC.doSpawn = function(config) {
  new TankTroop(config);
};

export default TankTroop;
