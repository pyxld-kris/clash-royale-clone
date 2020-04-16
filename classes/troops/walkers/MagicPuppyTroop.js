import Troop from "../TroopBase.js";

class MagicPuppyTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.movementSpeed = 17;
    // </movement stuff>

    // <attack stuff>
    this.health = 50;
    this.attackRate = 2000;
    this.attackDamage = 100;
    this.attackDistance = 30;
    this.cost = 4;
    // </attack stuff>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = MagicPuppyTroop;
STATIC.ANIM_KEY_PREFIX = "troop--magic-puppy";
STATIC.NAME = "MagicPuppyTroop";
STATIC.COST = 4;
STATIC.doSpawn = function(config) {
  new MagicPuppyTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default MagicPuppyTroop;
