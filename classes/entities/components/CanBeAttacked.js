class CanBeAttacked {
  constructor() {
    var attributes = {
      movementSpeed: 100,
      velocityDirection: 1,
      currentWaypoint: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

CanBeAttacked.methods = {};

export default CanBeAttacked;
