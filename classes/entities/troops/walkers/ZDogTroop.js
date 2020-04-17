import Troop from "../TroopBase.js";

const MIXINS = [];

class ZDogTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(10);
    // </movement stuff>

    // <attack stuff>
    this.setOverallHealth(40);
    this.setAttackRate(1500);
    this.setAttackDamage(20);
    this.setAttackDistance(20);
    this.setCost(4);
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
