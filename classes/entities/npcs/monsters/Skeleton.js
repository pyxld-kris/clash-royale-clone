import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Skeleton extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "skeleton");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Skeleton");
    this.assignRandomGender(["male", "female"]);

    setTimeout(() => {
      this.scene.sound.play("skeleton", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
