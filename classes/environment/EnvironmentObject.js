import Phaser from "phaser";

export default class EnvironmentObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, imageKey, isPhysical = false, depthOffset = 0) {
    super(scene, x, y, imageKey);
    this.scene = scene;

    // Add to rendering engine
    scene.add.existing(this).setOrigin(0.5, 1);

    if (isPhysical) {
      // Add to physics engine
      scene.physics.add.existing(this, true); // second parameter is isStatic

      // Fix the hitbox of this physics object
      const width = this.width;
      const height = this.height;
      this.setSize(width, parseInt(height / 2, 0)).setOffset(0, height / 2);
      //.setFriction(0);
      //.setCircle(width / 2 - 4, 4, height / 2 + 1);

      //this.body.friction.x = 0;
      //this.body.friction.y = 0;

      try {
        scene.physics.add.collider(this, scene.player);
        scene.physics.add.collider(this, scene.npcs);
      } catch (e) {
        console.error(e);
      }
    }

    // Keep this image visually correct
    this.setDepth(this.y + depthOffset);
  }

  destroy() {
    super.destroy();
  }
}
