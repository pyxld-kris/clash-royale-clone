// Represents game object which holds cards drawn from a deck and placed into a hand
// Then cards are played onto the field, which spawns troops

import Phaser from "phaser";

class Card extends Phaser.GameObjects.Container {
  constructor(scene, x, y, troopClass) {
    super(scene, x, y);

    this.troopClass = troopClass;
    this.width = 25;
    this.height = 25;

    this.isSelected = false;

    // Add to rendering engine
    scene.add.existing(this).setDepth(10000);

    // Add background
    this.background = scene.add
      .rectangle(0, 0, this.width, this.height, 0xbbbbbb)
      .setOrigin(0, 0);
    this.add(this.background);

    // Add troop image
    const animKey = troopClass.ANIM_KEY_PREFIX;
    const name = troopClass.NAME;
    const cost = troopClass.COST;
    this.add(scene.add.sprite(this.width / 2, this.height / 2, animKey));

    // Add mana cost text
    this.add(
      scene.add
        .text(0, 0, cost, { color: "blue", fontSize: "8px" })
        .setOrigin(0, 0)
    );
  }

  destroy() {
    super.destroy();
  }
}

export default Card;
