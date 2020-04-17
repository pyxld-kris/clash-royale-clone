import Troop from "../TroopBase.js";

const MIXINS = [];

class MagicPuppyTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(17);
    // </movement stuff>

    // <attack stuff>
    this.setOverallHealth(50);
    this.setAttackRate(2000);
    this.setAttackDamage(100);
    this.setAttackDistance(50);
    this.setAggroRange(50);
    this.setCost(4);
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = MagicPuppyTroop;
STATIC.ANIM_KEY_PREFIX = "troop--magic-puppy";
STATIC.NAME = "MagicPuppyTroop";
STATIC.COST = 4;
STATIC.doSpawn = function(config) {
  new MagicPuppyTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default MagicPuppyTroop;
