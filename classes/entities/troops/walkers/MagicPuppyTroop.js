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

    // <health>
    this.setOverallHealth(50);
    // </health>

    // <effect stuff>
    this.setAttentionRange(60);
    this.setEffectRange(50);
    this.setEffectRate(2000);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(100);
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
