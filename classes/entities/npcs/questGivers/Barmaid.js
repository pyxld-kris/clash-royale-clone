import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Barmaid extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "barmaid");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Barmaid");
    this.assignRandomGender(["female"]);
    this.populateAge(16, 40);

    this.setPossibleConversations([
      "How do I keep the ice from melting in your drink when you’re so hot?",
      "I've heard there are bandits round these parts... So scary!"
    ]);

    setTimeout(() => {
      this.scene.sound.play("barmaid", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
