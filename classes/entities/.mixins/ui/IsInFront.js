import Phaser from "phaser";

class IsInFront {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

IsInFront.methods = {
  // Called when an entity with this mixin is created
  _init() {
    console.log("putting dialog in front");
    this.setDepth(99999);
  }
};

export default IsInFront;
