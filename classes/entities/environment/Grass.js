import EnvironmentObject from "./EnvironmentObject.js";

const MIXINS = [];

export default class Grass extends EnvironmentObject {
  constructor(scene, x, y) {
    super(MIXINS, scene, x, y, "grass", false);

    this.setTint(0x99dd00);
  }

  destroy() {
    super.destroy();
  }
}
