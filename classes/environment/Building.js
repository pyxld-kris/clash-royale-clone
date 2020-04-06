import EnvironmentObject from "./EnvironmentObject.js";

export default class Building extends EnvironmentObject {
  constructor(scene, x, y) {
    super(scene, x, y, "building-outer", true, -10);

    this.setTint(0x774400);
  }

  destroy() {
    super.destroy();
  }
}
