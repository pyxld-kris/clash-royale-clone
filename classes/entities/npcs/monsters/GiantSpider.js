import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class GiantSpider extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "giantSpider");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Giant Spider");
    this.assignRandomGender(["male", "female"]);

    setTimeout(() => {
      this.scene.sound.play("giantSpider", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
