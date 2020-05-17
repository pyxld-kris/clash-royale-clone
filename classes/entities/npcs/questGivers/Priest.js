import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Priest extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "priest");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Priest");
    this.assignRandomGender(["male"]);
    this.populateAge(50, 80);

    setTimeout(() => {
      this.scene.sound.play("priest", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
