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

    // <health>
    this.setOverallHealth(10);
    // </health>

    // <effect stuff>
    this.setEffectRate(1000);
    this.setEffectRange(20);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(10);
    // </damage effect stuff>

    // <cost>
    this.setCost(4);
    // </cost>

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
