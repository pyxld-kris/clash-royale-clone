import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Drunk extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "drunk");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Drunk");
    this.assignRandomGender(["male"]);
    this.populateAge(30, 50);

    setTimeout(() => {
      this.scene.sound.play("drunk", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
