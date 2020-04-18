//import TroopBase from "../troops/TroopBase.js";

class CanSpawn {
  constructor() {
    var attributes = {
      spawnRate: 2000,
      spawnDelay: 1000,
      spawnType: null,
      createTime: null,
      lastSpawnTime: 0
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

CanSpawn.methods = {
  spawnFunc(scene) {
    //new this.spawnType(scene, this.x, this.y);
  },

  // <Setters>
  setSpawnRate(spawnRate) {
    this.spawnRate = spawnRate;
  },

  setSpawnDelay(spawnDelay) {
    this.spawnDelay = spawnDelay;
  },

  setSpawnType(spawnType) {
    this.spawnType = spawnType;
  },

  setSpawnFunc(spawnFunc) {
    this.spawnFunc = spawnFunc;
  },
  // </Setters>

  // Called when an entity with this component is updated
  _preUpdate(time, delta) {
    if (!this.createTime) this.createTime = time;

    if (time > this.createTime + this.spawnDelay) {
      if (time - this.spawnRate > this.lastSpawnTime) {
        this.lastSpawnTime = time;
        this.spawnFunc();
      }
    }
  },

  // Called when an entity with this component is destroyed
  _destroy() {}
  /** </Hook into phaser and internal events> */
};

export default CanSpawn;
