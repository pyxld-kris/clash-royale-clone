import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Werewolf extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "werewolf");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Werewolf");
    this.assignRandomGender(["male", "female"]);

    setTimeout(() => {
      this.scene.sound.play("werewolf", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
