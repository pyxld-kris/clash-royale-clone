import Troop from "../TroopBase.js";

const MIXINS = [];

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

    // <attack stuff>
    this.setOverallHealth(50);
    this.setAttackRate(500);
    this.setAttackDamage(10);
    this.setAttackDistance(30);
    this.setCost(2);
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = LilDemonTroop;
STATIC.ANIM_KEY_PREFIX = "troop--lil-demon";
STATIC.NAME = "LilDemonTroop";
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
