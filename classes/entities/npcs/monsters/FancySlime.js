import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class FancySlime extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "fancySlime");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Fancy Slime");
    this.assignRandomGender(["male", "female"]);

    setTimeout(() => {
      this.scene.sound.play("fancySlime", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
