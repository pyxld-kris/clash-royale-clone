import Phaser from "phaser";

class HasNametag {
  constructor() {
    var attributes = {
      nametagBackground: null,
      nametagText: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasNametag.methods = {
  // Called when an entity with this mixin is created
  _init() {},

  // <Setters>
  setNametagBackground(x, y, width, height, color, alpha) {
    if (this.nametagBackground) {
      this.nametagBackground.destroy();
    }

    this.nametagBackground = this.scene.add.container();
    // Create gradient white background out of multiple objects....
    for (let i = 0; i < 10; i++) {
      this.nametagBackground.add(
        this.scene.add
          .rectangle(x, y, width - i * 2, height, 0xffffff, 0.05)
          .setOrigin(0, 1)
      );
    }

    this.nametagBackground.setDepth(9998);
  },

  setNametagText(x, y, width, text) {
    if (this.nametagText) {
      this.nametagText.destroy();
    }

    this.nametagText = this.scene.add
      .bitmapText(
        x,
        y,
        "teeny-tiny-pixls",
        text,
        5,
        Phaser.GameObjects.BitmapText.ALIGN_LEFT // 1=middle algned text
      )
      .setOrigin(0, 1)
      .setTint(0x000000)
      .setMaxWidth(width);

    this.nametagText.setDepth(9999);
  },
  // </Setters>

  createNametag(x, y, width, height, text) {
    this.setNametagBackground(x, y, width, height, 0xffffff, 0.5);
    this.setNametagText(x + 1, y, width - 2, text);
  },

  // Called when an entity with this component is destroyed
  _destroy() {
    if (this.nametagBackground) this.nametagBackground.destroy();
    if (this.nametagText) this.nametagText.destroy();
  }

  /** </Hook into phaser and internal events> */
};

export default HasNametag;
