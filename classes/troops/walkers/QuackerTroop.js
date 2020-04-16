import Troop from "../TroopBase.js";

class QuackerTroop extends Troop {
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
    this.health = 50;
    this.attackRate = 200;
    this.attackDamage = 5;
    this.attackDistance = 20;
    this.cost = 4;
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = QuackerTroop;
STATIC.ANIM_KEY_PREFIX = "troop--quacker";
STATIC.NAME = "QuackerTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new QuackerTroop({
    ...config,
    x: config.x,
    y: config.y
  });
  new QuackerTroop({
    ...config,
    y: config.y + 10
  });
  new QuackerTroop({
    ...config,
    y: config.y - 10
  });
};

export default QuackerTroop;
