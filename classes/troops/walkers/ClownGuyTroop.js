import Troop from "../TroopBase.js";

class ClownGuyTroop extends Troop {
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

const STATIC = ClownGuyTroop;
STATIC.ANIM_KEY_PREFIX = "troop--clown-guy";
STATIC.NAME = "ClownGuyTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new ClownGuyTroop({
    ...config,
    x: config.x,
    y: config.y
  });
};

export default ClownGuyTroop;
