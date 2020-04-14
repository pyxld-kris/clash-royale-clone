import Troop from "../TroopBase.js";

class BabyCowTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.movementSpeed = 50;
    // </movement stuff>

    // <attack stuff>
    this.health = 10;
    this.attackRate = 200;
    this.attackDamage = 5;
    this.attackDistance = 20;
    this.cost = 1;
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = BabyCowTroop;
STATIC.ANIM_KEY_PREFIX = "troop--baby-cow";
STATIC.NAME = "BabyCowTroop";
STATIC.COST = 1;
STATIC.doSpawn = function(config) {
  new BabyCowTroop(config);
};

export default BabyCowTroop;
