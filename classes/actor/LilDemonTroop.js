import Phaser from "phaser";
import Troop from "./Troop.js";

export default class LlDemonTroop extends Troop {
  constructor(scene, owner, x, y, velocityDirection) {
    super(scene, owner, x, y, "troop--lil-demon", velocityDirection);

    this.animKeyPrefix = "troop--lil-demon";

    this.generateAnimations();

    this.setTint(0xffffff);
  }

  // TODO: Adding wrong key name
  generateAnimations() {
    // Create the animations we need from the player spritesheet
    const anims = this.scene.anims;
    anims.create({
      key: "troop--lil-demon--front",
      frames: anims.generateFrameNumbers("troop--lil-demon", {
        start: 0,
        end: 0
      }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "troop--lil-demon--back",
      frames: anims.generateFrameNumbers("troop--lil-demon", {
        start: 1,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    anims.create({
      key: "troop--lil-demon--side",
      frames: anims.generateFrameNumbers("troop--lil-demon", {
        start: 2,
        end: 2
      }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.play("troop--lil-demon--front", true); // default starting anim
  }

  destroy() {
    super.destroy();
  }
}
