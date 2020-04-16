import Player from "./Player.js";
import CardArea from "../cards/CardArea.js";
import ManaBank from "../ManaBank.js";

export default class ControlledPlayer extends Player {
  constructor(scene) {
    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const halfWorldWidth = worldWidth / 2;
    const halfWorldHeight = worldHeight / 2;

    super(scene, 0, halfWorldHeight, halfWorldWidth, worldHeight - 10, -1);

    // <ManaBank>
    const gameWidth = scene.game.config.width;
    const gameHeight = scene.game.config.height;
    this.manaBank = new ManaBank(
      scene,
      gameWidth / 2,
      gameHeight - 5,
      gameWidth,
      8
    );
    // </ManaBank>

    // <Player cards and UI>
    this.cardArea = new CardArea(
      scene,
      0,
      gameHeight - scene.cardHolderHeight,
      scene.cardHolderWidth,
      scene.cardHolderHeight
    );
    // </Player cards and UI>

    // Handle the player clicking on the play area
    this.spawnZone
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", pointer => {
        const playerCardHand = this.cardArea.hand;
        const currentCard = playerCardHand.selectedCardSlot.card;
        const troopClass = currentCard.troopClass;

        const spawnedTroop = this.spawnTroop(
          pointer.worldX,
          pointer.worldY,
          this.troopVelocityDirection,
          troopClass
        );

        if (spawnedTroop) playerCardHand.drawNextCard();
      });
  }

  destroy() {
    super.destroy();
  }
}
