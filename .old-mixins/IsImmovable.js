class IsImmovable {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

IsImmovable.methods = {
  // Called when an entity with this component is created, after the entity has been constructed
  _init() {
    if (this.body) this.body.setImmovable(true);
  }

  // <Getters>
  // </Getters>

  // <Setters>
  // </Setters>
};

export default IsImmovable;
