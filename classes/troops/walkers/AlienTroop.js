import Troop from "../TroopBase.js";

class AlienTroop extends Troop {
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

const STATIC = AlienTroop;
STATIC.ANIM_KEY_PREFIX = "troop--alien";
STATIC.NAME = "AlienTroop";
STATIC.doSpawn = function(config) {
  new AlienTroop({
    ...config,
    x: config.x + 10
  });
  new AlienTroop({
    ...config,
    x: config.x - 10
  });
  new AlienTroop({
    ...config,
    y: config.y - 10
  });
  new AlienTroop({
    ...config,
    y: config.y + 10
  });
};

export default AlienTroop;
