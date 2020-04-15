import Troop from "../TroopBase.js";

class EvilTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.movementSpeed = 10;
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

const STATIC = EvilTroop;
STATIC.ANIM_KEY_PREFIX = "troop--evil";
STATIC.NAME = "EvilTroop";
STATIC.COST = 5;
STATIC.doSpawn = function(config) {
  new EvilTroop(config);
};

export default EvilTroop;
