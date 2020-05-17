import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Blacksmith extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "blacksmith");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Blacksmith");
    this.assignRandomGender(["male"]);
    this.populateAge(40, 60);

    this.setPossibleConversations([
      "I need something hard to pound...",
      "I like to work with tools",
      "My work gets so hot and heavy"
    ]);

    setTimeout(() => {
      this.scene.sound.play("blacksmith", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
