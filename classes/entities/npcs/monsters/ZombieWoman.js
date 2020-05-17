import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class ZombieWoman extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "zombieWoman");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Zombie Woman");
    this.assignRandomGender(["female"]);

    this.setPossibleConversations([
      "I would like to eat you",
      "Looking for partner with brains"
    ]);

    setTimeout(() => {
      this.scene.sound.play("zombieWoman", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
