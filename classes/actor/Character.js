import Phaser from "phaser";

export default class Character extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "character");
    this.scene = scene;

    // Add to rendering engine
    scene.add.existing(this).setOrigin(0.5, 1);
    // Add to physics engine
    scene.physics.add.existing(this, false); // second parameter is isStatic

    // Fix the hitbox of this physics object
    const width = this.width;
    const height = this.height;
    this
      //.setSize(width - 4, parseInt(height / 2, 0))
      //.setOffset(2, height / 2)
      .setCircle(width / 2 - 4, 4, height / 2 + 1)
      // Use function chaining to set other physical properties
      .setCollideWorldBounds(true)
      .setMaxVelocity(300, 300)
      .setDrag(500)
      .setBounce(1, 1)
      .setFriction(0);

    // Keep this image visually correct
    this.setDepth(this.y);
  }

  destroy() {
    super.destroy();
  }
}
