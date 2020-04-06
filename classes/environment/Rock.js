import EnvironmentObject from "./EnvironmentObject.js";

export default class Rock extends EnvironmentObject {
  constructor(scene, x, y) {
    super(scene, x, y, "rock", false);

    this.setTint(0x7777bb);
  }

  destroy() {
    super.destroy();
  }
}
