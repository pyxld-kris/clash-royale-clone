import Troop from "../TroopBase.js";

class AlienTroop extends Troop {
  constructor(config) {
    super({
      ...config,
      animKeyPrefix: "troop--alien"
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

export default AlienTroop;
