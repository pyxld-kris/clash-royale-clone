import Player from "./Player.js";

export default class ControlledPlayer extends Player {
  constructor(scene) {
    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const halfWorldWidth = worldWidth / 2;
    const halfWorldHeight = worldHeight / 2;

    super(scene, 0, halfWorldHeight, halfWorldWidth, worldHeight - 10, -1);

    scene.input.on("pointerdown", pointer => {
      this.spawnTroop(
        pointer.worldX,
        pointer.worldY,
        this.troopVelocityDirection
      );
    });
  }

  destroy() {
    super.destroy();
  }
}
