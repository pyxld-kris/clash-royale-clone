import EnvironmentObject from "./EnvironmentObject.js";

export default class Tree extends EnvironmentObject {
  constructor(scene, x, y) {
    super(scene, x, y, "tree", true);

    this.setTint(0x006600);
  }

  destroy() {
    super.destroy();
  }
}
