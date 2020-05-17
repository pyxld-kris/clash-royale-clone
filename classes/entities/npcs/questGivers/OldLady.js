import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class OldLady extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "oldLady");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Old Lady");
    this.assignRandomGender(["female"]);
    this.populateAge(55, 80);

    setTimeout(() => {
      this.scene.sound.play("oldLady", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
