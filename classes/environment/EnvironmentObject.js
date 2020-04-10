import Phaser from "phaser";

export default class EnvironmentObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, imageKey, isPhysical = false, depthOffset = 0) {
    super(scene, x, y, imageKey);
    this.scene = scene;

    // Add to rendering engine
    scene.add.existing(this).setOrigin(0.5, 1);

    if (isPhysical) {
      // Add to physics engine
      scene.physics.add.existing(this);
      this.body.setImmovable(true);

      // Fix the hitbox of this physics object
      const width = this.width;
      const height = this.height;
      this.setSize(width, parseInt(height / 2, 0)).setOffset(0, height / 2);

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
