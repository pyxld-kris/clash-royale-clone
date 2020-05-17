import Phaser from "phaser";

class HasDialogBackground {
  constructor() {
    var attributes = {
      dialogBackground: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasDialogBackground.methods = {
  // Called when an entity with this mixin is created
  _init() {},

  // <Setters>
  setDialogBackground(x, y, width, height, color, alpha) {
    if (this.dialogBackground) {
      this.dialogBackground.destroy();
    }

    this.dialogBackground = this.scene.add
      .rectangle(x, y, width, height, color, alpha)
      .setOrigin(0, 0);

    this.dialogBackground.setDepth(9998);
  },
  // </Setters>

  /** <Hook into phaser and internal events> */

  // Called when an entity with this component is updated
  _update(time, delta) {},

  // Called when an entity with this component is destroyed
  _destroy() {
    if (this.dialogBackground) this.dialogBackground.destroy();
  }

  /** </Hook into phaser and internal events> */
};

export default HasDialogBackground;
