import Phaser from "phaser";

var HasEffects = {
  effects: [], // Holds functions to perform on targets
  effectRate: 1000,
  effectRange: 30,
  attentionRange: 50,
  lastEffectTime: -1,
  effectTarget: null,
  effectArea: null,

  // <Set up and effect management>
  addEffect(effect) {
    this.effects.push(effect);
  },

  doEffects(target) {
    console.log("doing effect", this.effects.length);
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
    if (this.effectArea) {
      this.effectArea
        .setSize(effectRange * 2, effectRange * 2)
        .setOrigin(0.5, 0.5);
      this.effectRange = effectRange;
    }
  },

  setAttentionRange(attentionRange) {
    this.attentionRange = attentionRange;
  },

  setLastEffectTime(lastEffectTime) {
    this.lastEffectTime = lastEffectTime;
  },

  setEffectTarget(effectTarget) {
    this.effectTarget = effectTarget;
  },
  // </Setters>

  initEffectArea(radius) {
    if (this.effectArea) this.effectArea.destroy(); // Can only be one aggro area

    this.effectArea = this.scene.physics.add
      .existing(
        this.scene.add.rectangle(
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
    this.effectArea.troop = this;
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
    this.initEffectArea(this.attentionRange); // From CanAttack component
    this.owner.aggroAreas.add(this.effectArea);
  },

  // Called when an entity with this component is updated
  _preUpdate(time, delta) {
    try {
      if (this.effectArea) {
        this.effectArea.setPosition(this.x, this.y);
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
    if (this.effectArea) this.effectArea.destroy();
  }

  /** </Hook into phaser and internal events> */
};

export default HasEffects;
