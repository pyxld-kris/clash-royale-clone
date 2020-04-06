import Phaser from "phaser";
import { Scene } from "phaser";

export default class LoadingScene extends Scene {
  constructor() {
    super("TitleScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    this.add
      .bitmapText(
        centerX,
        centerY - 25,
        "teeny-tiny-pixls",
        "Launch\nRoyale",
        15
      )
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
