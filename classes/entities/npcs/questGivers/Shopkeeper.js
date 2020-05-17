import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Shopkeeper extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "shopkeeper");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Shopkeeper");
    this.assignRandomGender(["male"]);
    this.populateAge(25, 40);

    setTimeout(() => {
      this.scene.sound.play("shopkeeper", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
