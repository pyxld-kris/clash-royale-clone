import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Princess extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "princess");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Princess");
    this.assignRandomGender(["female"]);
    this.populateAge(18, 30);

    setTimeout(() => {
      this.scene.sound.play("princess", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
