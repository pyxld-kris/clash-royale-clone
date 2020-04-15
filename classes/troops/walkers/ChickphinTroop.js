import Troop from "../TroopBase.js";

class ChickphinTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.movementSpeed = 8;
    // </movement stuff>

    // <attack stuff>
    this.health = 200;
    this.attackRate = 1500;
    this.attackDamage = 50;
    this.attackDistance = 20;
    this.cost = 3;
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = ChickphinTroop;
STATIC.ANIM_KEY_PREFIX = "troop--chickphin";
STATIC.NAME = "ChickphinTroop";
STATIC.COST = 6;
STATIC.doSpawn = function(config) {
  new ChickphinTroop(config);
};

export default ChickphinTroop;
