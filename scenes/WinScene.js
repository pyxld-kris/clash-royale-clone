import { Scene } from "phaser";

class WinScene extends Scene {
  constructor() {
    super("WinScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#77dd77");
    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    this.add
      .bitmapText(centerX, centerY - 25, "teeny-tiny-pixls", "You win!", 15)
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

export default WinScene;
