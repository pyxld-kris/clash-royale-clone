// Represents a handful of cards

import Phaser from "phaser";
import Card from "./Card";
import CardSlot from "./CardSlot";

class Hand extends Phaser.GameObjects.Container {
  constructor(scene, cardSource, x, y, width, height) {
    super(scene, x, y);

    this.cardSource = cardSource;
    this.selectedCardSlot = null;

    // Add to rendering engine
    scene.add.existing(this).setDepth(10000);

    // Add background
    this.add(
      scene.add.rectangle(0, 0, width, height, 0xdddddd).setOrigin(0, 0)
    );

    // Add card slots
    this.slots = [
      new CardSlot(scene, this, 2, 5),
      new CardSlot(scene, this, 32, 5),
      new CardSlot(scene, this, 62, 5),
      new CardSlot(scene, this, 92, 5)
    ];
    for (let i = 0; i < this.slots.length; i++) {
      this.add(this.slots[i]);
    }

    // populate card slots with cards
    for (let i = 0; i < this.slots.length; i++) {
      const thisSlot = this.slots[i];
      thisSlot.insertCard(this.cardSource.drawCard());
    }
  }

  deselectAll() {
    this.selectedCard = null;
    this.slots.forEach(slot => {
      slot.deselect();
    });
  }

  setSelectedCardSlot(cardSlot) {
    this.scene.opponent.spawnZoneOverlay.setAlpha(0.5); // Show red area denoting where player can't spawn
    this.selectedCardSlot = cardSlot;
  }
  drawNextCard() {
    const usedCard = this.selectedCardSlot.removeCard();
    this.selectedCardSlot.insertCard(this.cardSource.drawCard());

    this.cardSource.shuffle(); // Shuffle the card back into the deck
    this.cardSource.addAt(usedCard, 0); // Put the used card back into the deck
  }

  destroy() {
    super.destroy();
  }
}

export default Hand;
