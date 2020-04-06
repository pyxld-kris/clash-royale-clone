import { Scene } from "phaser";

export default class LoadingScene extends Scene {
  constructor() {
    super("LoadingScene");
  }

  nextScene() {
    this.scene.start("TitleScene");
  }

  preload() {
    // Actual loading follows
    this.load.bitmapFont(
      "teeny-tiny-pixls",
      "assets/fonts/teeny-tiny-pixls.png",
      "assets/fonts/teeny-tiny-pixls.fnt"
    );

    this.load.image("background", "../assets/background.png");
    this.load.image("tower", "../assets/tower.png");
    this.load.image("building-outer", "../assets/building-outer.png");
    this.load.image("rock", "../assets/rock.png");
    this.load.image("grass", "../assets/grass.png");
    this.load.image("tree", "../assets/tree.png");
    this.load.image("tree-trunk", "../assets/tree-trunk.png");
    this.load.spritesheet("character", "../assets/character.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet("npc", "../assets/npc.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet("troop--evil", "../assets/troop--evil.png", {
      frameWidth: 16,
      frameHeight: 19
    });
  }

  // The rest of this file makes the visual loading bar work!
  create() {
    // Loading bar code
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    this.add
      .bitmapText(centerX, centerY - 24, "teeny-tiny-pixls", "Loading", 10)
      .setOrigin(0.5, 0.5);
  }

  init() {
    // Loading bar code
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    let barWidth = this.cameras.main.width - 24;
    let barHeight = 25;

    var progressBox = this.add.rectangle(
      centerX,
      centerY,
      barWidth,
      barHeight,
      0x000000
    );
    var progressBar = this.add
      .rectangle(
        progressBox.x - parseInt(progressBox.width / 2),
        centerY,
        barWidth,
        barHeight,
        0xffffff
      )
      .setOrigin(0, 0.5)
      .setScale(0, 1);

    this.load.on("progress", value => {
      console.log(value);
      progressBar.setScale(value, 1);
      if (value == 1) {
        // Loading is complete
        setTimeout(() => {
          this.nextScene();
          this.loadingProgressComplete = true;
        }, 2000);
      }
    });
    ////////////////////////////////////////
  }
}
