import Phaser from "phaser";

var CanAttack = {
  attackRate: 1000,
  attackDamage: 20,
  attackDistance: 50,
  lastAttackTime: -1,
  enemyTroop: null,
  aggroArea: null,

  // <Setters>
  setAttackRate(attackRate) {
    this.attackRate = attackRate;
  },

  setAttackDamage(attackDamage) {
    this.attackDamage = attackDamage;
  },

  setAggroRange(aggroRange) {
    if (this.aggroArea) {
      this.aggroArea
        .setSize(aggroRange * 2, aggroRange * 2)
        .setOrigin(0.5, 0.5);
      this.aggroRange = aggroRange;
    }
  },

  setAttackDistance(attackDistance) {
    this.attackDistance = attackDistance;
  },

  setLastAttackTime(lastAttackTime) {
    this.lastAttackTime = lastAttackTime;
  },

  setEnemyTroop(enemyTroop) {
    this.enemyTroop = enemyTroop;
  },
  // </Setters>

  initAggroArea(radius) {
    if (this.aggroArea) this.aggroArea.destroy(); // Can only be one aggro area

    this.aggroArea = this.scene.physics.add
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
    this.aggroArea.troop = this;
  },

  canAttack() {
    return this.enemyTroop ? false : true;
  },

  initiateAttack(target) {
    if (this.canAttack()) {
      this.startAttacking(target);
    }
  },

  startAttacking(troop) {
    if (!this.enemyTroop) {
      this.enemyTroop = troop;
    }
  },

  stopAttacking() {
    this.enemyTroop = null;
  },

  damageEnemy(amount) {
    this.scene.tweens.add({
      targets: [this],
      scaleX: 1.1 + this.attackDamage * 0.025,
      scaleY: 1.1 + this.attackDamage * 0.025,
      ease: "Linear",
      duration: 100,
      yoyo: true,
      repeat: 0,
      callbackScope: this
    });
    this.enemyTroop.deductHealth(this.attackDamage);
  },

  /** <Hook into phaser and internal events> */

  // Called when an entity with this component is updated
  _preUpdate(time, delta) {
    if (this.aggroArea) {
      this.aggroArea.setPosition(this.x, this.y);
    }

    if (this.enemyTroop && !this.enemyTroop.isDestroyed) {
      // Check if we're within range to do damage, otherwise approach
      const enemyTroop = this.enemyTroop;

      let distance = Phaser.Math.Distance.Between(
        this.x,
        this.y,
        enemyTroop.x,
        enemyTroop.y
      );

      if (distance > this.attackDistance) {
        // We need to move closer to our enemy troop
        this.scene.physics.moveTo(this, enemyTroop.x, enemyTroop.y, 100);
      } else {
        // we're ready to attack
        this.setAcceleration(0, 0);
        this.setVelocity(0, 0);
        if (time - this.attackRate > this.lastAttackTime) {
          this.lastAttackTime = time;
          this.damageEnemy();
        }
      }
    } else {
      this.enemyTroop = null;
    }
  },

  // Called when an entity with this component is destroyed
  _destroy() {
    if (this.aggroArea) this.aggroArea.destroy();
  }
  /** </Hook into phaser and internal events> */
};

export default CanAttack;
