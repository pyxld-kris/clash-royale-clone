import Troop from "../TroopBase.js";

const MIXINS = [];

class AlienTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(17);
    // </movement stuff>

    // <attack stuff>
    this.setOverallHealth(10);
    this.setAttackRate(1000);
    this.setAttackDamage(10);
    this.setAttackDistance(20);
    this.setCost(4);
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
