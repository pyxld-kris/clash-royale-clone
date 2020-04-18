import Phaser from "phaser";

const MIXINS = [];

export default class PhysicalEntity extends Phaser.Physics.Arcade.Sprite {
  constructor(extraMixins, scene, x, y, sprite) {
    try {
      super(scene, x, y, sprite);
      this.scene = scene;
      this.isDestroyed = false;

      scene.add.existing(this);

      scene.physics.add.existing(this);

      // Apply our mixin components to this instance, and store for cleanup
      this.mixins = [...MIXINS, ...extraMixins];
      this.mixins.forEach(component => {
        let componentInstance = new component();
        Object.assign(this, componentInstance);
        //console.log(this);
      });
    } catch (e) {
      console.log(e);
    }
  }

  preUpdate(time, delta) {
    // Call the _init method of each of this entity's components, if it exists
    if (!this.isInitialized) {
      this.mixins.forEach(component => {
        if (component.methods._init) component.methods._init.call(this);
      });
      this.isInitialized = true;
    }

    // Call the preUpdate method of each of this entity's components, if it exists
    this.mixins.forEach(component => {
      if (component.methods._preUpdate)
        component.methods._preUpdate.call(this, time, delta);
    });

    super.preUpdate(time, delta);
  }

  destroy() {
    this.isDestroyed = true;

    // Call the _destroy method of each of this entity's components, if it exists
    this.mixins.forEach(component => {
      if (component.methods._destroy) component.methods._destroy.call(this);
    });

    super.destroy();
  }
}
