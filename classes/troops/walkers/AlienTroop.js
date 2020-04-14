import Troop from "../TroopBase.js";

class AlienTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.movementSpeed = 40;
    // </movement stuff>

    // <attack stuff>
    this.health = 10;
    this.attackRate = 1000;
    this.attackDamage = 10;
    this.attackDistance = 20;
    this.cost = 4;
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = AlienTroop;
STATIC.ANIM_KEY_PREFIX = "troop--alien";
STATIC.NAME = "AlienTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new AlienTroop({
    ...config,
    x: config.x,
    y: config.y
  });
  new AlienTroop({
    ...config,
    x: config.x + 10,
    y: config.y + 10
  });
  new AlienTroop({
    ...config,
    x: config.x - 10,
    y: config.y - 10
  });
  new AlienTroop({
    ...config,
    x: config.x - 10,
    y: config.y + 10
  });
  new AlienTroop({
    ...config,
    x: config.x + 10,
    y: config.y - 10
  });
};

export default AlienTroop;
