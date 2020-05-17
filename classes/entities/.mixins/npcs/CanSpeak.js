// Allows an Entity to begin or participate in conversations

import Phaser from "phaser";
import Conversation from "../../conversations/Conversation";

class CanSpeak {
  constructor() {
    var attributes = {
      currentConversation: null,
      possibleConversations: []
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

CanSpeak.methods = {
  // Called when an entity with this mixin is created
  _init() {},

  setPossibleConversations(possibleConversations) {
    this.possibleConversations = possibleConversations;
  },

  beginConversation() {
    this.currentConversation = new Conversation(
      this.scene,
      [this],
      this.possibleConversations
    );
  },

  _destroy() {
    if (this.currentConversation) this.currentConversation.destroy();
  }
};

export default CanSpeak;
