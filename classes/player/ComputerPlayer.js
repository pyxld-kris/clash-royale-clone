import Player from "./Player.js";
import ManaBank from "../ManaBank.js";

export default class ComputerPlayer extends Player {
  constructor(scene) {
    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const halfWorldWidth = worldWidth / 2;
    const halfWorldHeight = worldHeight / 2;

    super(scene, 0, 0, halfWorldWidth, 30, 1);

    // <ManaBank>
    this.manaBank = new ManaBank(scene, 0, 0, 10, 10, 10);
    // </ManaBank>

    this.decisionInterval = scene.time.addEvent({
      delay: 250,
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
          this.troopVelocityDirection
        );
      }
    }
  }

  destroy() {
    this.decisionInterval.remove();
    super.destroy();
  }
}
