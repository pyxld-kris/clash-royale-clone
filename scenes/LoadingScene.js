import { Scene } from "phaser";
import locationImages from "../assets/locations";
import monsterImages from "../assets/npcs/monsters";
import questGiverImages from "../assets/npcs/questGivers";

import npcSounds from "../assets/sounds/npcs";

import particle from "../assets/particles/particle.png";

//import outlineShader from "../assets/shaders/outline.glsl";

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

    // Load particles
    this.load.image("particle", particle);

    // load locations
    for (let locationKey of Object.keys(locationImages)) {
      this.load.image(locationKey, locationImages[locationKey]);
    }

    // load monsters
    for (let monsterKey of Object.keys(monsterImages)) {
      this.load.image(monsterKey + "Image", monsterImages[monsterKey]);
    }

    // load questGivers
    for (let questGiverKey of Object.keys(questGiverImages)) {
      this.load.image(questGiverKey + "Image", questGiverImages[questGiverKey]);
    }

    // Load monster sounds
    for (let soundKey of Object.keys(npcSounds)) {
      this.load.audio(soundKey, npcSounds[soundKey]);
      //this.sound.add(soundKey);
    }

    //this.load.image("background", "assets/background.png");
    /*
    this.load.spritesheet("character", "assets/character.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    */
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
      progressBar.setScale(value, 1);
    });

    this.load.on("complete", () => {
      this.onLoadComplete();
    });
    ////////////////////////////////////////
  }

  onLoadComplete() {
    for (let npcKey of [
      ...Object.keys(monsterImages),
      ...Object.keys(questGiverImages)
    ]) {
      // Add paddng to this image
      var renderTexture = this.add.renderTexture(0, 0, 34, 34);
      renderTexture.draw(npcKey + "Image", 1, 1);
      renderTexture.saveTexture(npcKey);

      /*
      let graphics = this.add
        .graphics()
        .setBlendMode(0)

        .setTexture(npcKey + "Image", null, 0)
        .fillStyle(0xffffff)
        .fillRect(1, 1, 32, 32);

      //.rotateCanvas(1)
      //.scaleCanvas(34, 34)
      //.generateTexture(monsterKey, 34, 34);

      //graphics.destroy();
*/
    }

    // console.log(this);

    this.nextScene();
    this.loadingProgressComplete = true;
  }
}
