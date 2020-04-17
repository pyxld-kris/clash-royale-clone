import Troop from "../TroopBase.js";

const MIXINS = [];

class BabyCowTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(20);
    // </movement stuff>

    // <attack stuff>
    this.setOverallHealth(10);
    this.setAttackRate(200);
    this.setAttackDamage(5);
    this.setAttackDistance(20);
    this.setCost(1);
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = BabyCowTroop;
STATIC.ANIM_KEY_PREFIX = "troop--baby-cow";
STATIC.NAME = "BabyCowTroop";
STATIC.COST = 1;
STATIC.doSpawn = function(config) {
  new BabyCowTroop(config);
};

export default BabyCowTroop;
