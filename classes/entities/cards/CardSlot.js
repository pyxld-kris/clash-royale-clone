// Represents game object which holds cards drawn from a deck and placed into a hand
// Then cards are played onto the field, which spawns troops

import Phaser from "phaser";

class CardSlot extends Phaser.GameObjects.Container {
  constructor(scene, hand, x, y) {
    super(scene, x, y);

    this.hand = hand;
    this.width = 27;
    this.height = 27;
    this.originalY = y;

    this.card = null;
    this.isSelected = false;

    // Add to rendering engine
    scene.add.existing(this).setDepth(10000);

    // Add background
    this.background = scene.add
      .rectangle(0, 0, this.width, this.height, 0x0077bb)
      .setOrigin(0, 0);
    this.add(this.background);

    // Make this interactive and respond to clicks
    this.background
      .setInteractive({ useHandCursor: true })
      .on("pointerup", () => {
        this.select();
      });
  }

  insertCard(card) {
    if (this.card) this.removeCard();
    this.card = card;
    this.card.setPosition(1, 1);
    this.add(card);
  }
  removeCard() {
    let cardRef = this.card;
    this.remove(this.card);
    this.card = null;

    return cardRef;
  }

  select() {
    this.hand.deselectAll();
    this.isSelected = true;
    this.y = 1;
    this.background.setFillStyle(0xffff00);
    this.hand.setSelectedCardSlot(this);
  }

  deselect() {
    this.isSelected = false;
    this.y = this.originalY;
    this.background.setFillStyle(0x0077bb);
  }

  destroy() {
    this.card.destroy();
    super.destroy();
  }
}

export default CardSlot;
