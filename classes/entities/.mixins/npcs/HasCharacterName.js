import Phaser from "phaser";
import { nameByRace } from "fantasy-name-generator";

class HasCharacterName {
  constructor() {
    var attributes = {
      name: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasCharacterName.methods = {
  // Called when an entity with this mixin is created
  _init() {},

  // <Getters>
  getName() {
    return this.name;
  },
  // </Getters>

  // <Setters>
  setName(name) {
    this.name = name;
  },
  // </Setters>

  assignRandomName() {
    this.name = nameByRace("human", { gender: this.getGender() });
  }
};

export default HasCharacterName;
