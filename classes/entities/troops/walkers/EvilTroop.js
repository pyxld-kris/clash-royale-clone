import Troop from "../TroopBase.js";

const MIXINS = [];

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

const STATIC = EvilTroop;
STATIC.ANIM_KEY_PREFIX = "troop--evil";
STATIC.NAME = "EvilTroop";
STATIC.COST = 5;
STATIC.doSpawn = function(config) {
  new EvilTroop(config);
};

export default EvilTroop;
