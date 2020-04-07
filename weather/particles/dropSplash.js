import AnimatedParticle from "./animatedParticle";

class DropSplash extends AnimatedParticle {
  constructor(emitter) {
    let scene = emitter.manager.scene;
    var rainsplat = scene.anims.get("rainsplat");
    if (rainsplat === undefined) {
      rainsplat = scene.anims.create({
        key: "splat",
        frames: scene.anims.generateFrameNumbers("particles", {
          start: 1,
          end: 4
        }),
        frameRate: 24,
        repeat: 0
      });
    }
    super(emitter, rainsplat);
  }
}

export default DropSplash;
