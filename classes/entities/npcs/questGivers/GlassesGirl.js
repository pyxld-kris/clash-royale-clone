import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class GlassesGirl extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "glassesGirl");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Girl");
    this.assignRandomGender(["female"]);
    this.populateAge(18, 25);

    setTimeout(() => {
      this.scene.sound.play("glassesGirl", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
