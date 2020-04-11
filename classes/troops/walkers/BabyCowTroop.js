import Troop from "../TroopBase.js";

class BabyCowTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: "troop--baby-cow"
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

export default BabyCowTroop;
