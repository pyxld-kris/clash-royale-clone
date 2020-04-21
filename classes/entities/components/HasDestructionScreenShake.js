import Phaser from "phaser";

class HasDestructionScreenShake {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasDestructionScreenShake.methods = {
  // Called when an entity with this component is destroyed
  _destroy() {
    try {
      if (!this.isDestroyed)
        // Seems to be an issue calling this when already sdestroeyd while switching scenes? This hack fixes, should probably find root cause
        this.scene.cameras.main.shake();
    } catch (e) {
      console.error(e);
    }
  }
};

export default HasDestructionScreenShake;
