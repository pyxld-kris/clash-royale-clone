import Troop from "../TroopBase.js";

class LilDemonTroop extends Troop {
  constructor(scene, owner, x, y, velocityDirection) {
    super({
      scene, owner, x, y, velocityDirection,
      animKeyPrefix: "troop--lil--demon"
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

export default LilDemonTroop;
