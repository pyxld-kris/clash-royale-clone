import Troop from "../TroopBase.js";

class LilDemonTroop extends Troop {
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
    this.health = 50;
    this.attackRate = 500;
    this.attackDamage = 10;
    this.attackDistance = 30;
    this.cost = 2;
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = LilDemonTroop;
STATIC.ANIM_KEY_PREFIX = "troop--lil-demon";
STATIC.NAME = "LilDemonTroop";
STATIC.COST = 2;
STATIC.doSpawn = function(config) {
  new LilDemonTroop({
    ...config,
    x: config.x - 5
  });
  new LilDemonTroop({
    ...config,
    x: config.x + 5
  });
};

export default LilDemonTroop;
