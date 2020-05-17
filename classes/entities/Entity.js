import Phaser from "phaser";

export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(extraMixins, scene, x, y, imageKey) {
    const MIXINS = [];

    super(scene, x, y, imageKey);
    this.isInitialized = false;
    this.isDestroyed = false;
    this.members = [];

    // Apply our mixin components to this instance, and store for cleanup
    this.mixins = [...MIXINS, ...extraMixins];
    this.mixins.forEach(component => {
      // Error reporting
      if (!component) {
        console.error("Bad Mixin");
        throw new Error("Bad Mixin");
      }
      let componentInstance = new component();
      Object.assign(this, componentInstance);
    });

    // Hook into Phasers 'update' event
    scene.events.on("update", this.update, this);
  }

  update(time, delta) {
    // Call the _init method of each of this entity's components, if it exists
    if (!this.isInitialized) {
      this.mixins.forEach(component => {
        if (component.methods._init) component.methods._init.call(this);
      });
      if (this.init) this.init();
      this.isInitialized = true;
    }

    // Call the update() method of each of this entity's components, if it exists
    this.mixins.forEach(component => {
      if (component.methods._update)
        component.methods._update.call(this, time, delta);
    });

    super.update(time, delta);
  }

  destroy() {
    // Remove Phasers 'update' event hook
    this.scene.events.off("update", this.update, this);

    this.isDestroyed = true;

    // destroy all members of this entity
    this.members.forEach(member => {
      if (!member.isDestroyed) member.destroy();
    });

    // Call the _destroy method of each of this entity's components, if it exists
    this.mixins.forEach(component => {
      if (component.methods._destroy) component.methods._destroy.call(this);
    });

    super.destroy();
  }

  // add() : adds a member onto this entity. These members are referenced in some mixins
  add(member) {
    this.members.push(member);
  }

  // remove() : removes a member from this entity. These members are referenced in some mixins
  remove(member) {
    this.members.splice(this.members.indexOf(member), 1);
  }

  // Performs a function on each member of this entity
  forEachMember(func) {
    this.members.forEach(func);
  }
}
