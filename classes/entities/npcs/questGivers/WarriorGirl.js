import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class WarriorGirl extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "warriorGirl");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Warrior Girl");
    this.assignRandomGender(["female"]);
    this.populateAge(16, 35);

    setTimeout(() => {
      this.scene.sound.play("warriorGirl", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
