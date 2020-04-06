import EnvironmentObject from "./EnvironmentObject.js";

export default class TreeTrunk extends EnvironmentObject {
  constructor(scene, x, y) {
    super(scene, x, y, "tree-trunk", true);

    this.setTint(0x885500);
  }

  destroy() {
    super.destroy();
  }
}
