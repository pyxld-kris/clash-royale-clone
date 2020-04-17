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

    // <attack stuff>
    this.setOverallHealth(50);
    this.setAttackRate(1000);
    this.setAttackDamage(20);
    this.setAttackDistance(30);
    this.setCost(3);
    // </attack stuff>

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
