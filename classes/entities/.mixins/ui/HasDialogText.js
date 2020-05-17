import Phaser from "phaser";

const TEXT_UPDATE_INTERVAL = 50;

class HasDialogText {
  constructor() {
    var attributes = {
      dialogText: null,
      text: "",
      currentText: "",
      lastTextUpdateTime: -1,
      doingTextUpdate: false
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasDialogText.methods = {
  // Called when an entity with this mixin is created
  _init() {},

  // <Setters>
  setDialogText(x, y, width, text) {
    if (this.dialogText) {
      this.dialogText.destroy();
    }

    this.text = text;
    this.currentText = "";

    this.dialogText = this.scene.add
      .bitmapText(
        x - width / 2,
        y,
        "teeny-tiny-pixls",
        "",
        5,
        Phaser.GameObjects.BitmapText.ALIGN_LEFT // 1=middle algned text
      )
      .setOrigin(0, 0)
      .setMaxWidth(width);
    this.dialogText.setDepth(9999);

    this.doingTextUpdate = true;
  },
  // </Setters>

  /** <Hook into phaser and internal events> */

  // Called when an entity with this component is updated
  _update(time, delta) {
    if (this.doingTextUpdate) {
      if (time - this.lastTextUpdateTime > TEXT_UPDATE_INTERVAL) {
        let nextChar = this.text.charAt(this.currentText.length);
        if (nextChar) {
          this.currentText += nextChar;

          this.dialogText.setText(this.currentText);

          this.lastTextUpdateTime = time;
        } else {
          this.doingTextUpdate = false;
        }
      }
    }
  },

  // Called when an entity with this component is destroyed
  _destroy() {
    if (this.dialogText) this.dialogText.destroy();
  }

  /** </Hook into phaser and internal events> */
};

export default HasDialogText;
