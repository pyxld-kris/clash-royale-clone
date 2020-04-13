import Troop from "../TroopBase.js";

class BabyCowTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = BabyCowTroop;
STATIC.ANIM_KEY_PREFIX = "troop--baby-cow";
STATIC.NAME = "BabyCowTroop";
STATIC.doSpawn = function(config) {
  new BabyCowTroop(config);
};

export default BabyCowTroop;
