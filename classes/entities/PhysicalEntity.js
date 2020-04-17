import Phaser from "phaser";

const MIXINS = [];

export default class PhysicalEntity extends Phaser.Physics.Arcade.Sprite {
  constructor(extraMixins, scene, x, y, sprite) {
    super(scene, x, y, sprite);
    this.scene = scene;
    this.isDestroyed = false;

    scene.add.existing(this);

    scene.physics.add.existing(this);

    // Apply our mixin components to this instance, and store for cleanup
    this.mixins = [...MIXINS, ...extraMixins];
    this.mixins.forEach(component => {
      Object.assign(this, component);
    });
  }

  preUpdate(time, delta) {
    // Call the preUpdate method of each of this entity's components, if it exists
    this.mixins.forEach(component => {
      if (component._preUpdate) component._preUpdate.call(this, time, delta);
    });

    super.preUpdate(time, delta);
  }

  destroy() {
    this.isDestroyed = true;

    // Call the cleanup method of each of this entity's components, if it exists
    this.mixins.forEach(component => {
      if (component._destroy) component._destroy.call(this);
    });

    super.destroy();
  }
}
