import { Scene } from "phaser";

class TitleScene extends Scene {
  constructor() {
    super("TitleScene");
  }

  create() {
    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    this.add
      .bitmapText(centerX, centerY - 8, "teeny-tiny-pixls", "RPG of Love", 15)
      .setOrigin(0.5, 0.5);

    this.add
      .bitmapText(
        centerX,
        centerY + 12,
        "teeny-tiny-pixls",
        "Click or touch to begin!",
        5
      )
      .setOrigin(0.5, 0.5);

    this.input.on("pointerdown", () => {
      this.nextScene();
    });
  }

  nextScene() {
    this.scene.start("PlayScene");
  }
}

export default TitleScene;
