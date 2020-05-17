import Phaser from "phaser";
import { Scene } from "phaser";

const fontStyle = {
  fontSize: "12px",
  color: "#fff",
  stroke: "#000",
  strokeThickness: 2
};

let CREDITS_STRING = `
Code:
 Kris Gano

Art:
 Kris Gano
 Curtis
 DVWN
 Brian Redd

Writers:
 Denis D

Sounds:
 Kris Gano
 Denis D

Special Thanks: 
 Epic Eden
`;

export default class CreditsScene extends Scene {
  constructor() {
    super("CreditsScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    this.background = this.add.rectangle(
      this.game.config.width / 2,
      this.game.config.height / 2,
      this.game.config.width,
      this.game.config.height,
      0x000000,
      0.5
    );
    this.textContainer = this.add.container(0, 0);

    this.textContainer.add(
      this.add
        .bitmapText(centerX, 20, "teeny-tiny-pixls", "Credits", 10)
        .setOrigin(0.5, 0.5)
    );
    this.textContainer.add(
      this.add
        .bitmapText(centerX, 30, "teeny-tiny-pixls", CREDITS_STRING, 10)
        .setOrigin(0.5, 0)
    );

    this.add.tween({
      targets: this.textContainer,
      y: -1000,
      duration: 50000
    });

    this.input.on("pointerdown", (pojnter, localX, localY, event) => {
      this.scene.manager.stop("CreditsScene");
      event.stopPropagation();
    });
  }
}
