import EnvironmentObject from "./EnvironmentObject.js";

export default class Grass extends EnvironmentObject {
  constructor(scene, x, y) {
    super(scene, x, y, "grass", false);

    this.setTint(0x99dd00);
  }

  destroy() {
    super.destroy();
  }
}
