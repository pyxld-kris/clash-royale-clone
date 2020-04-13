import Troop from "../TroopBase.js";

class EvilTroop extends Troop {
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

const STATIC = EvilTroop;
STATIC.ANIM_KEY_PREFIX = "troop--evil";
STATIC.NAME = "EvilTroop";
STATIC.doSpawn = function(config) {
  new EvilTroop(config);
};

export default EvilTroop;
