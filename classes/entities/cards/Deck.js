// Represents a deck of Cards

import Phaser from "phaser";

import Walkers from "../troops/walkers";

import Card from "./Card";

class Deck extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height) {
    super(scene, x, y);

    // Treating this array as a stack
    //this.cards = [];

    // Add to rendering engine
    scene.add.existing(this).setDepth(10000);

    // Add background
    /*
    this.add(
      scene.add.rectangle(0, 0, width, height, 0xcc0000).setOrigin(0, 0)
    );
    */

    //this.topCard = this.add(new Card(scene, 0, 0));
    this.populate();
    this.shuffle();
  }

  populate() {
    for (let troopClass of Object.values(Walkers)) {
      if (troopClass.IS_IN_DECK) {
        const name = troopClass.NAME;
        const cost = troopClass.COST;
        const animKeyPrefix = troopClass.ANIM_KEY_PREFIX;

        const thisCard = new Card(this.scene, 0, 0, troopClass);
        this.add(thisCard);
      }
    }
  }

  drawCard() {
    const nextCard = this.getAt(this.length - 1);
    return nextCard;
  }

  destroy() {
    super.destroy();
  }
}

export default Deck;
