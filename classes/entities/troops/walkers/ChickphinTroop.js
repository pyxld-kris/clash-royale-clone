import Troop from "../TroopBase.js";

const MIXINS = [];

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
    this.setEffectRate(1500);
    this.setEffectRange(20);
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
