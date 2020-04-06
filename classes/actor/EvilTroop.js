import Phaser from "phaser";
import Troop from "./Troop.js";

export default class EvilTroop extends Troop {
  constructor(scene, owner, x, y, velocityDirection) {
    super(scene, owner, x, y, "troop--evil", velocityDirection);

    this.setTint(0xffffff);
  }

  destroy() {
    super.destroy();
  }
}
