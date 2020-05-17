import Phaser from "phaser";

class IsAttachedToCamera {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

IsAttachedToCamera.methods = {
  // Called when an entity with this mixin is created
  _init() {
    this.setScrollFactor(0);
  }
};

export default IsAttachedToCamera;
