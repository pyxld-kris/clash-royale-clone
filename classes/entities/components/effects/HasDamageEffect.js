import Phaser from "phaser";

var HasDamageEffect = {
  damageAmount: 10,

  // <Setters>
  setDamageAmount(damageAmount) {
    this.damageAmount = damageAmount;
  },
  // </Setters>

  doDamageEffect(target) {
    // Do visual effect
    this.scene.tweens.add({
      targets: [this],
      scaleX: 1.1 + this.damageAmount * 0.025,
      scaleY: 1.1 + this.damageAmount * 0.025,
      ease: "Linear",
      duration: 100,
      yoyo: true,
      repeat: 0,
      callbackScope: this
    });

    // affect health of target here
    target.deductHealth(this.damageAmount);
  },

  /** <Hook into phaser and internal events> */

  // Called when an entity with this component is created
  _init() {
    this.addEffect(this.doDamageEffect);
  },

  // Called when an entity with this component is updated
  _preUpdate(time, delta) {},

  // Called when an entity with this component is destroyed
  _destroy() {}

  /** </Hook into phaser and internal events> */
};

export default HasDamageEffect;
