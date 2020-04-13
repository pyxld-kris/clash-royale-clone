import Troop from "../TroopBase.js";

class LilDemonTroop extends Troop {
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

const STATIC = LilDemonTroop;
STATIC.ANIM_KEY_PREFIX = "troop--lil-demon";
STATIC.NAME = "LilDemonTroop";
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
