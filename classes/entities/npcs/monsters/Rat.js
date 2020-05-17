import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Rat extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "rat");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Rat");
    this.assignRandomGender(["male", "female"]);

    setTimeout(() => {
      this.scene.sound.play("rat", { volume: 0.25 });
    }, 100);

    super.init();
  }
}
