import Troop from "../TroopBase.js";

class ZDogTroop extends Troop {
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
    this.health = 20;
    this.attackRate = 1500;
    this.attackDamage = 20;
    this.attackDistance = 20;
    this.cost = 4;
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = ZDogTroop;
STATIC.ANIM_KEY_PREFIX = "troop--z-dog";
STATIC.NAME = "ZDogTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new ZDogTroop({
    ...config,
    x: config.x,
    y: config.y
  });
  new ZDogTroop({
    ...config,
    x: config.x + 10,
    y: config.y + 10
  });
  new ZDogTroop({
    ...config,
    x: config.x - 10,
    y: config.y - 10
  });
  new ZDogTroop({
    ...config,
    x: config.x - 10,
    y: config.y + 10
  });
  new ZDogTroop({
    ...config,
    x: config.x + 10,
    y: config.y - 10
  });
};

export default ZDogTroop;
