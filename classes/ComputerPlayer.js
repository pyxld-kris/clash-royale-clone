import Player from "./Player.js";

export default class ComputerPlayer extends Player {
  constructor(scene) {
    const gameWidth = scene.game.config.width;
    const gameHeight = scene.game.config.height;
    const halfGameWidth = gameWidth / 2;
    const halfGameHeight = gameHeight / 2;

    super(scene, 0, 0, halfGameWidth, 30);

    this.decisionInterval = scene.time.addEvent({
      delay: 1000,
      callback: this.makeDecision,
      callbackScope: this,
      loop: true
    });
  }

  makeDecision() {
    const manaAmount = this.manaBank.getManaAmount();

    // TODO: Use Phaser built in randomization
    if (manaAmount >= 3) {
      if (Math.random() < 0.25) {
        // 25% chance that we'll spawn an enemy
        this.spawnTroop(
          parseInt(Math.random() * this.scene.game.config.width, 0),
          50,
          3,
          1
        );
      }
    }
  }

  destroy() {
    this.decisionInterval.remove();
    super.destroy();
  }
}
