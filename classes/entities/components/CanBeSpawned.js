class CanBeSpawned {
  constructor() {
    var attributes = {
      cost: 3
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

CanBeSpawned.methods = {
  spawn(x, y) {},

  // <Setters>
  setCost(cost) {
    this.cost = cost;
  }
  // </Setters>
};

export default CanBeSpawned;
