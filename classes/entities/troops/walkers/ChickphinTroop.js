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

    // <attack stuff>
    this.setOverallHealth(200);
    this.setAttackRate(1500);
    this.setAttackDamage(50);
    this.setAttackDistance(20);
    this.setCost(3);
    // </attack stuff>

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
