import Troop from "../TroopBase.js";

class EvilTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: "troop--evil"
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

export default EvilTroop;
