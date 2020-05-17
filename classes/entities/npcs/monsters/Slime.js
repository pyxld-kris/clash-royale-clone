import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Slime extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "slime");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Slime");
    this.assignRandomGender(["male", "female"]);

    setTimeout(() => {
      this.scene.sound.play("slime", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
