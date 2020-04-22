import Phaser from "phaser";
import Deck from "./Deck";
import Hand from "./Hand";

class CardArea extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height) {
    super(scene, x, y);

    // Add to rendering engine
    scene.add.existing(this).setDepth(10000);

    this.add(
      scene.add.rectangle(0, 0, width, height, 0x000000, 0.5).setOrigin(0, 0)
    );

    this.deck = new Deck(scene, 5, 15, 25, 25);
    this.add(this.deck);

    this.hand = new Hand(scene, this.deck, 35, 5, 121, 35);
    this.add(this.hand);
  }

  destroy() {
    super.destroy();
  }
}

export default CardArea;
