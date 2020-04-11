import Troop from "../TroopBase.js";

class BattleOtterTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: "troop--battle-otter"
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

export default BattleOtterTroop;
