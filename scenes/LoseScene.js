import { Scene } from "phaser";

class LoseScene extends Scene {
  constructor() {
    super("LoseScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#dd7777");
    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    this.add
      .bitmapText(centerX, centerY - 25, "teeny-tiny-pixls", "You lose.", 15)
      .setTint(0x000000)
      .setOrigin(0.5, 0.5);

    this.add
      .bitmapText(
        centerX,
        centerY + 12,
        "teeny-tiny-pixls",
        "Click or touch to restart!",
        5
      )
      .setTint(0x000000)
      .setOrigin(0.5, 0.5);

    this.input.on("pointerdown", () => {
      this.nextScene();
    });
  }

  nextScene() {
    this.scene.start("TitleScene");
  }
}

export default LoseScene;
