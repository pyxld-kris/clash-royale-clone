import Phaser from "phaser";
import Entity from "../Entity.js";
import Mixins from "../.mixins";

import DialogBox from "./DialogBox.js";

export default class Conversation extends Entity {
  constructor(scene, participants, dialogMessages) {
    const MIXINS = [];

    super(MIXINS, scene);

    this.currentDialogBox = null;
    this.participants = participants;
    this.dialogMessages = dialogMessages;

    if (dialogMessages) {
      if (dialogMessages.length === 0) {
        this.dialogMessages = [
          "Welcome, I love you",
          "It's so wonderful to meet you!",
          "You are my sunshine",
          "I'm going to tell you a story. It begins like all stories, in the beginning. As the story progresses, it then has some other parts like a middle and an end."
        ];
      }
    }
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.nextDialogBox();
  }

  nextDialogBox() {
    let speaker = this.participants[0];

    this.currentDialogBox = new DialogBox(
      this.scene,
      speaker.getName() + " the " + speaker.getRole(),
      this.dialogMessages.getRandomEntry()
    );
  }

  destroy() {
    this.currentDialogBox.destroy();
    super.destroy();
  }
}
