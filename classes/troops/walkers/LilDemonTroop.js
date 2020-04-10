import Troop from "../TroopBase.js";

class LilDemonTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: "troop--lil-demon"
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

export default LilDemonTroop;
