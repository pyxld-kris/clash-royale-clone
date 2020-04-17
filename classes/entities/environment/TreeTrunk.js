import EnvironmentObject from "./EnvironmentObject.js";

const MIXINS = [];

export default class TreeTrunk extends EnvironmentObject {
  constructor(scene, x, y) {
    super(MIXINS, scene, x, y, "tree-trunk", true);

    this.setTint(0x885500);
  }

  destroy() {
    super.destroy();
  }
}
