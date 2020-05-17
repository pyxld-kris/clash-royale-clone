import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class DwarfInnkeeper extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "dwarfInnkeeper");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Dwarven Innkeeper");
    this.assignRandomGender(["male"]);
    this.populateAge(35, 60);

    setTimeout(() => {
      this.scene.sound.play("dwarfInnkeeper", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
