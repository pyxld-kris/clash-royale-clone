import Phaser from "phaser";

class HasEffects {
  constructor() {
    var attributes = {
      effects: [], // Holds functions to perform on targets
      effectRate: 1000,
      effectRange: 30,
      attentionRange: 50,
      lastEffectTime: -1,
      effectTarget: null,
      attentionArea: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasEffects.methods = {
  // <Set up and effect management>
  addEffect(effect) {
    this.effects.push(effect);
  },

  doEffects(target) {
    // affect health of target here
    this.effects.forEach(effect => {
      effect.call(this, this.effectTarget); // Call effect function and pass in target
    });
  },
  // </Set up and effect management>

  // <Setters>
  setEffectRate(effectRate) {
    this.effectRate = effectRate;
  },

  setEffectRange(effectRange) {
    this.effectRange = effectRange;
  },

  setAttentionRange(attentionRange) {
    if (this.attentionArea) {
      this.attentionArea
        .setSize(attentionRange * 2, attentionRange * 2)
        .setOrigin(0.5, 0.5);
    }
    this.attentionRange = attentionRange;
  },

  setLastEffectTime(lastEffectTime) {
    this.lastEffectTime = lastEffectTime;
  },

  setEffectTarget(effectTarget) {
    this.effectTarget = effectTarget;
  },
  // </Setters>

  initAttentionArea(radius) {
    if (this.attentionArea) this.attentionArea.destroy(); // Can only be one aggro area

    this.attentionArea = this.scene.physics.add
      .existing(
        this.scene.add.zone(
          this.x,
          this.y,
          radius * 2,
          radius * 2,
          0xff0000,
          0.1
        )
      )
      .setOrigin(0.5, 0.5)
      .setDepth(100);
    this.attentionArea.troop = this;
  },

  canDoEffect() {
    return this.effectTarget ? false : true;
  },

  initiateEffect(target) {
    if (this.canDoEffect()) {
      this.startDoingEffect(target);
    }
  },

  startDoingEffect(target) {
    if (!this.effectTarget) {
      this.effectTarget = target;
    }
  },

  stopDoingEffect() {
    this.effectTarget = null;
  },

  /** <Hook into phaser and internal events> */

  // Called when an entity with this component is created
  _init() {
    this.initAttentionArea(this.attentionRange); // From CanAttack component
    this.owner.aggroAreas.add(this.attentionArea);
  },

  // Called when an entity with this component is updated
  _preUpdate(time, delta) {
    try {
      if (this.attentionArea) {
        this.attentionArea.setPosition(this.x, this.y);
      }

      if (this.effectTarget && !this.effectTarget.isDestroyed) {
        // Check if we're within range to do damage, otherwise approach
        const effectTarget = this.effectTarget;

        let distance = Phaser.Math.Distance.Between(
          this.x,
          this.y,
          effectTarget.x,
          effectTarget.y
        );

        if (distance > this.effectRange) {
          // We need to move closer to our enemy troop
          if (this.canMove)
            this.scene.physics.moveTo(
              this,
              effectTarget.x,
              effectTarget.y,
              100
            );
        } else {
          // we're ready to attack
          this.setAcceleration(0, 0);
          this.setVelocity(0, 0);
          if (time - this.effectRate > this.lastEffectTime) {
            this.lastEffectTime = time;
            this.doEffects(this.effectTarget);
          }
        }
      } else {
        this.effectTarget = null;
      }
    } catch (e) {
      console.error(e);
    }
  },

  // Called when an entity with this component is destroyed
  _destroy() {
    if (this.attentionArea) this.attentionArea.destroy();
  }

  /** </Hook into phaser and internal events> */
};

export default HasEffects;
