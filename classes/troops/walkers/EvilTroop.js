import Troop from "../TroopBase.js";

class EvilTroop extends Troop {
  constructor(scene, owner, x, y, velocityDirection) {
    super({
      scene, owner, x, y, velocityDirection,
      animKeyPrefix: "troop--evil"
    });

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}

export default EvilTroop;
