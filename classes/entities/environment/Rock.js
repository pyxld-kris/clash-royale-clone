import EnvironmentObject from "./EnvironmentObject.js";

const MIXINS = [];

export default class Rock extends EnvironmentObject {
  constructor(scene, x, y) {
    super(MIXINS, scene, x, y, "rock", false);

    this.setTint(0x7777bb);
  }

  destroy() {
    super.destroy();
  }
}
