import EnvironmentObject from "./EnvironmentObject.js";

export default class Tower extends EnvironmentObject {
  constructor(scene, x, y) {
    super(scene, x, y, "tower", true, -6);

    this.health = 1000;

    this.healthDisplay = scene.add
      .text(x, y, this.health, { fontSize: "8px", color: "white" })
      //.bitmapText(x, y, "teeny-tiny-pixls", "S" + this.health, 20)
      .setOrigin(0.5, 0.5)
      .setDepth(999999); //.setOffset(0.5, 1);

    this.setTint(0x885500);
  }

  doDamage(amount) {
    this.health -= amount;
    this.updateHealth();
    if (this.health <= 0) this.destroy();
  }

  updateHealth() {
    this.healthDisplay.setText(this.health);
  }

  destroy() {
    this.healthDisplay.destroy();
    super.destroy();
  }
}
