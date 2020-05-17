import Phaser from "phaser";

class HasWobbleEffect {
  constructor() {
    var attributes = {
      wobbleInterval: null,
      wobbleTween: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasWobbleEffect.methods = {
  // Called when an entity with this mixin is created
  _init() {
    this.wobbleInterval = setInterval(() => {
      this.wobbleTween = this.scene.tweens.add({
        targets: [this],
        y: this.y - 4,
        ease: "Bounce",
        duration: 200,
        //loop: -1,
        //loopDelay: 1500,
        yoyo: true
      });
    }, 1500);
  },

  _destroy() {
    clearInterval(this.wobbleInterval);
  }
};

export default HasWobbleEffect;
