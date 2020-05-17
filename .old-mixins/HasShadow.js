class HasShadow {
  constructor() {
    var attributes = {
      shadow: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasShadow.methods = {
  // Called when an entity with this component is created, after the entity has been constructed
  _init() {
    this.shadow = this.scene.add.ellipse(
      this.x,
      this.y,
      this.width / 1.1,
      this.height / 1.25,
      0x000000,
      0.25
    );
    this.shadow.setDepth(2);
  },

  // Called every frame, before this entity updates
  _update() {
    this.shadow.setPosition(this.x, this.y - 2);
  },

  // Called when an entity with this component is destroyed
  _destroy() {
    this.shadow.destroy();
  }
};

export default HasShadow;
