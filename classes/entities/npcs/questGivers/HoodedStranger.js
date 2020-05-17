import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class HoodedStranger extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "hoodedStranger");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Hooded Stranger");
    this.assignRandomGender(["male", "female"]);
    this.populateAge(15, 80);

    setTimeout(() => {
      this.scene.sound.play("hoodedStranger", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
