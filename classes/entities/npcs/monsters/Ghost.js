import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Ghost extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "ghost");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Ghost");
    this.assignRandomGender(["male", "female"]);

    setTimeout(() => {
      this.scene.sound.play("ghost", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
