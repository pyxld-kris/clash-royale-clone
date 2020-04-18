import Troop from "../TroopBase.js";

const MIXINS = [];

class BattleOtterTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(15);
    // </movement stuff>

    // <health>
    this.setOverallHealth(50);
    // </health>

    // <effect stuff>
    this.setAttentionRange(40);
    this.setEffectRange(30);
    this.setEffectRate(1000);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(20);
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

const STATIC = BattleOtterTroop;
STATIC.ANIM_KEY_PREFIX = "troop--battle-otter";
STATIC.NAME = "BattleOtterTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new BattleOtterTroop(config);
};

export default BattleOtterTroop;
