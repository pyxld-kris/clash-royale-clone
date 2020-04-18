import Troop from "../TroopBase.js";

const MIXINS = [];

class QuackerTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(10);
    // </movement stuff>

    // <health>
    this.setOverallHealth(50);
    // </health>

    // <effect stuff>
    this.setAttentionRange(20);
    this.setEffectRange(15);
    this.setEffectRate(200);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(5);
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

const STATIC = QuackerTroop;
STATIC.ANIM_KEY_PREFIX = "troop--quacker";
STATIC.NAME = "QuackerTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new QuackerTroop({
    ...config,
    x: config.x,
    y: config.y
  });
  new QuackerTroop({
    ...config,
    y: config.y + 10
  });
  new QuackerTroop({
    ...config,
    y: config.y - 10
  });
};

export default QuackerTroop;
