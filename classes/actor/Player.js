import Phaser from "phaser";
import Character from "./Character.js";

export default class Player extends Character {
  constructor(scene, x, y) {
    super(scene, x, y, "character");
    this.scene = scene;

    // Create the animations we need from the player spritesheet
    const anims = scene.anims;
    anims.create({
      key: "character-front",
      frames: anims.generateFrameNumbers("character", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "character-back",
      frames: anims.generateFrameNumbers("character", { start: 1, end: 1 }),
      frameRate: 12,
      repeat: -1
    });
    anims.create({
      key: "character-side",
      frames: anims.generateFrameNumbers("character", { start: 2, end: 2 }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.play("character-front", true); // default starting anim

    // Track the arrow keys & OPQA
    const {
      LEFT,
      RIGHT,
      UP,
      DOWN,
      W,
      A,
      S,
      D
    } = Phaser.Input.Keyboard.KeyCodes;
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
      w: W,
      a: A,
      s: S,
      d: D
    });

    // hook into the scene's update function
    this.scene.events.on("update", this.update, this);
  }

  update(time, delta) {
    const keys = this.keys; // store for easy access

    // Up/down controls
    if (keys.up.isDown || keys.w.isDown) {
      this.setVelocityY(-50);
      this.anims.play("character-back", true);
    } else if (keys.down.isDown || keys.s.isDown) {
      this.setVelocityY(50);
      this.anims.play("character-front", true);
    }

    // Let/right controls
    if (keys.left.isDown || keys.a.isDown) {
      this.setVelocityX(-50);
      this.anims.play("character-side", true);
      this.setFlipX(true);
    } else if (keys.right.isDown || keys.d.isDown) {
      this.setVelocityX(50);
      this.anims.play("character-side", true);
      this.setFlipX(false);
    }

    // Keep this image visually correct
    this.setDepth(this.y);
  }

  destroy() {
    if (this.scene)
      // sometimes scene is undefined when in the process of restarting?
      this.scene.events.off("update", this.update, this);
    super.destroy();
  }
}
