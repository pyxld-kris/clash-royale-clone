import Phaser from "phaser";
import Character from "./Character.js";

export default class Troop extends Character {
  constructor(scene, owner, x, y, imageKey, velocityDirection) {
    super(scene, x, y, imageKey, velocityDirection);
    this.scene = scene;
    this.owner = owner; // A Player object

    try {
      this.setTint(0x555599);

      this.setFriction(10)
        .setDrag(10)
        .setMaxVelocity(30, 30)
        .setBounce(0.5);

      this.generateAnimations();

      this.aggroArea = scene.add
        .rectangle(x, y, 60, 60, 0xff0000, 0.5)
        .setDepth(100);

      // hook into the scene's update function
      this.scene.events.on("update", this.update, this);

      this.setAcceleration(0, 50 * velocityDirection);
      this.anims.play("npc-back", true);
      if (velocityDirection > 0) this.anims.play("npc-front", true);
      scene.physics.add.collider(this, scene.trees);
      scene.physics.add.collider(this, scene.player.npcs);
      scene.physics.add.collider(this, scene.opponent.npcs);

      // TODO: Use phaser built in timer
      setTimeout(() => {
        this.destroy();
      }, 10000);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  generateAnimations() {
    // Create the animations we need from the player spritesheet
    const anims = this.scene.anims;
    anims.create({
      key: "npc-front",
      frames: anims.generateFrameNumbers("npc", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "npc-back",
      frames: anims.generateFrameNumbers("npc", { start: 1, end: 1 }),
      frameRate: 12,
      repeat: -1
    });
    anims.create({
      key: "npc-side",
      frames: anims.generateFrameNumbers("npc", { start: 2, end: 2 }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.play("npc-front", true); // default starting anim
  }

  update(time, delta) {
    this.aggroArea.setPosition(this.x, this.y);
    /*
    if (parseInt(time, 0) % 10 === 0) {
      console.log("do move npc");
      // every 1 second
      let rand = Math.random();
      if (rand < 0.1) {
        this.setVelocityY(-50);
        this.anims.play("npc-back", true);
      } else if (rand < 0.2) {
        this.setVelocityY(50);
        this.anims.play("npc-front", true);
      } else if (rand < 0.3) {
        this.setVelocityX(-50);
        this.anims.play("npc-side", true);
        this.setFlipX(true);
      } else if (rand < 0.4) {
        this.setVelocityX(50);
        this.anims.play("npc-side", true);
        this.setFlipX(false);
      } else {
        this.setVelocity(0);
      }
      

      // Keep this image visually correct
    }
    */

    this.setDepth(this.y);
  }

  destroy() {
    if (this.scene)
      // sometimes scene is undefined when in the process of restarting?
      this.scene.events.off("update", this.update, this);

    this.aggroArea.destroy();

    super.destroy();
  }
}
