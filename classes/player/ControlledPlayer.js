import Player from "./Player.js";
import CardArea from "../cards/CardArea.js";

export default class ControlledPlayer extends Player {
  constructor(scene) {
    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const halfWorldWidth = worldWidth / 2;
    const halfWorldHeight = worldHeight / 2;

    super(scene, 0, halfWorldHeight, halfWorldWidth, worldHeight - 10, -1);

    // <Player card and UI>
    const gameWidth = scene.game.config.width;
    const gameHeight = scene.game.config.height;
    this.cardArea = new CardArea(
      scene,
      0,
      gameHeight - scene.cardHolderHeight,
      scene.cardHolderWidth,
      scene.cardHolderHeight
    );
    // </Player card and UI>

    // Handle the player clicking on the play area
    scene.input.on("pointerdown", pointer => {
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
