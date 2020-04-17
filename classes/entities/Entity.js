import Phaser from "phaser";

const MIXINS = [];

export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(extraMixins, scene, x, y, sprite) {
    super(scene, x, y, sprite);
    this.isDestroyed = false;

    scene.add.existing(this);

    // Apply our mixin components to this instance
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
