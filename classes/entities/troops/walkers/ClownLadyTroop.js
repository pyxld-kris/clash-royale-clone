import Troop from "../TroopBase.js";

const MIXINS = [];

class ClownLadyTroop extends Troop {
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
    this.setOverallHealth(10);
    this.setAttackRate(1000);
    this.setAttackDamage(10);
    this.setAttackDistance(20);
    this.setCost(4);
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = ClownLadyTroop;
STATIC.ANIM_KEY_PREFIX = "troop--clown-lady";
STATIC.NAME = "ClownLadyTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new ClownLadyTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default ClownLadyTroop;
