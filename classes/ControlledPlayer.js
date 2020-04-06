import Player from "./Player.js";

export default class ControlledPlayer extends Player {
  constructor(scene) {
    const gameWidth = scene.game.config.width;
    const gameHeight = scene.game.config.height;
    const halfGameWidth = gameWidth / 2;
    const halfGameHeight = gameHeight / 2;

    super(scene, 0, halfGameHeight, halfGameWidth, gameHeight - 10);

    scene.input.on("pointerdown", pointer => {
      this.spawnTroop(pointer.worldX, pointer.worldY, 3, -1);
    });
  }

  destroy() {
    super.destroy();
  }
}
