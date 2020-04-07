import { GameObjects } from "phaser";

class AnimatedParticle extends GameObjects.Particles.Particle {
  constructor(emitter, anim) {
    super(emitter);

    this.t = 0;
    this.i = 0;
    this.anim = anim;
  }

  update(delta, step, processors) {
    var result = super.update(delta, step, processors);

    this.t += delta;

    if (this.t >= this.life / this.anim.frames.length) {
      this.i++;

      if (this.i > this.anim.frames.length - 1) {
        this.i = 0;
        if (this.anim.repeat !== -1) {
          return true;
        }
      }
      this.frame = this.anim.frames[this.i].frame;

      this.t -= this.life / this.anim.frames.length;
    }

    return result;
  }
}

export default AnimatedParticle;
