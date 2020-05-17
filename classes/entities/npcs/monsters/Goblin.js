import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Goblin extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "goblin");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Goblin");
    this.assignRandomGender(["male", "female"]);

    super.init();
  }
}
