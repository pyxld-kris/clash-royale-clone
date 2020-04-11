// Represents a deck of Cards

import Phaser from "phaser";

// TODO: make troops/entities reference waypoints when moving

class Deck {
  constructor(scene, x, y) {
    super(scene, x, y, 10, 10, 0xff9900);

    // Add to rendering engine
    scene.add
      .existing(this)
      .setOrigin(0.5, 0.5)
      .setDepth(10000);
  }

  destroy() {
    super.destroy();
  }
}

export default Deck;
