import Troop from "../TroopBase.js";

class BattleOtterTroop extends Troop {
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

const STATIC = BattleOtterTroop;
STATIC.ANIM_KEY_PREFIX = "troop--battle-otter";
STATIC.NAME = "BattleOtterTroop";
STATIC.doSpawn = function(config) {
  new BattleOtterTroop(config);
};

export default BattleOtterTroop;
