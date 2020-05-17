import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class ZombieMan extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "zombieMan");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Zombie Man");
    this.assignRandomGender(["male"]);

    this.setPossibleConversations([
      "I would like to eat you",
      "Uhhhhhhhhh mmmmmmmmmeerrrrrrr uuuuggggggggg... right there..."
    ]);

    setTimeout(() => {
      this.scene.sound.play("zombieMan", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
