import Troop from "../TroopBase.js";

class BattleOtterTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.movementSpeed = 15;
    // </movement stuff>

    // <attack stuff>
    this.health = 50;
    this.attackRate = 1000;
    this.attackDamage = 20;
    this.attackDistance = 30;
    this.cost = 3;
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
