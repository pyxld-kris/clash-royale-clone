import Phaser from "phaser";

class HasGender {
  constructor() {
    var attributes = {
      gender: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasGender.methods = {
  // Called when an entity with this mixin is created
  _init() {},

  // <Getters>
  getGender() {
    return this.gender;
  },
  // </Getters>

  // <Setters>
  setGender(gender) {
    this.gender = gender;
  },
  // </Setters>

  assignRandomGender(genders) {
    this.setGender(genders.getRandomEntry());
  }
};

export default HasGender;
