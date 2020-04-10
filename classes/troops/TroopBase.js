import Phaser from "phaser";

// scene, owner, x, y, velocityDirection, animKeyPrefix

class TroopBase extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y);

    // destructure things we'll use a lot (like the scene)
    const { scene } = config;

    // Add to rendering engine
    scene.add.existing(this).setOrigin(0.5, 1);
    // Add to physics engine
    scene.physics.add.existing(this);

    this.owner = config.owner; // A Player object
    this.velocityDirection = config.velocityDirection;

    this.animKeyPrefix = config.animKeyPrefix;

    // <attack stuff>
    this.enemyTroop = null;
    this.health = 100;
    this.attackRate = 1000;
    this.attackDamage = 20;
    this.attackDistance = 10;
    this.cost = 3;
    this.lastAttackTime = -1;
    this.isDestroyed = false;
    // </attack stuff>

    // <Aggression zone stuff>
    this.aggroArea = scene.physics.add
      .existing(scene.add.rectangle(x, y, 60, 60, 0xff0000, 0.1))
      .setDepth(100);
    this.aggroArea.troop = this;
    // </Aggression zone stuff>

    this.owner.troops.add(this);
    this.owner.aggroAreas.add(this.aggroArea);

    this.setTint(0x555599);

    this.setFriction(10)
      .setDrag(10)
      .setMaxVelocity(30, 30)
      .setBounce(0.5);

    this.setAcceleration(0, 50 * velocityDirection);

    // default starting anim
    this.anims.play(`${this.animKeyPrefix}--front`, true);

    scene.delayedCall(10000, this.destroy);
  }

  doDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) this.destroy();
  }

  initiateAttack(target) {
    if (this.canAttack()) {
      this.startAttacking(target);
    }
  }

  canAttack() {
    return this.enemyTroop ? false : true;
  }

  startAttacking(troop) {
    if (!this.enemyTroop) {
      this.enemyTroop = troop;
    }
  }

  stopAttacking() {
    this.enemyTroop = null;
  }

  damageEnemy(amount) {
    this.enemyTroop.doDamage(this.attackDamage);
  }

  preUpdate(time, delta) {
    this.anims.play(this.animKeyPrefix + "--back", true);
    if (this.velocityDirection > 0)
      this.anims.play(this.animKeyPrefix + "--front", true);

    this.aggroArea.setPosition(this.x, this.y);
    this.setDepth(this.y);

    if (this.enemyTroop && !this.enemyTroop.isDestroyed) {
      // Check if we're within range to do damage, otherwise approach
      const enemyTroop = this.enemyTroop;

      if (
        Phaser.Math.Distance.Between(
          this.x,
          this.y,
          enemyTroop.x,
          enemyTroop.y
        ) > this.attackDistance
      ) {
        // We need to move closer to our enemy troop
        this.scene.physics.accelerateTo(this, enemyTroop.x, enemyTroop.y, 100);
      } else {
        // we're ready to attack
        this.setAcceleration(0, 0);
        if (time - this.attackRate > this.lastAttackTime) {
          this.damageEnemy();
        }
      }
    } else {
      this.enemyTroop = null;
      this.setAcceleration(0, 50 * this.velocityDirection);
    }
  }

  spawn() {
    
  }

  destroy() {
    this.isDestroyed = true;
    this.aggroArea.destroy();

    super.destroy();
  }
}

export default TroopBase;