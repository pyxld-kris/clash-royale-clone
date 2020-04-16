import Phaser from "phaser";

import Waypoint from "../Waypoint.js";

// scene, owner, x, y, velocityDirection, animKeyPrefix

class TroopBase extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    try {
      super(config.scene, config.x, config.y, "character");

      // destructure things we'll use a lot (like the scene)
      const { scene } = config;

      // Add to rendering engine
      scene.add.existing(this).setOrigin(0.5, 1);
      // Add to physics engine
      scene.physics.add.existing(this);

      // Fix the hitbox of this physics object
      const width = this.width;
      const height = this.height;
      this.setCircle(width / 2 - 4, 4, height / 2 + 1)
        // Use function chaining to set other physical properties
        .setCollideWorldBounds(true)
        .setMaxVelocity(300, 300)
        .setDrag(500)
        .setBounce(1, 1)
        .setFriction(0);

      this.owner = config.owner; // A Player object
      this.velocityDirection = config.velocityDirection;

      this.animKeyPrefix = config.animKeyPrefix;

      // <movement stuff>
      this.currentWaypoint = null;
      this.movementSpeed = 100;
      // </movement stuff>

      // <attack stuff>
      this.enemyTroop = null;
      this.health = 100;
      this.attackRate = 1000;
      this.attackDamage = 20;
      this.attackDistance = 30;
      this.cost = 3;
      this.lastAttackTime = -1;
      this.isDestroyed = false;
      // </attack stuff>

      // <Aggression zone stuff>
      this.aggroArea = scene.physics.add
        .existing(scene.add.zone(config.x, config.y, 60, 60, 0xff0000, 0.1))
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

      this.getNextWaypoint();

      // default starting anim
      this.anims.play(`${this.animKeyPrefix}--front`, true);

      //scene.time.delayedCall(10000, this.destroy, null, this);
    } catch (e) {
      console.error(e);
    }
  }

  getNextWaypoint() {
    try {
      let nextWaypoint = Waypoint.getNext(
        this.x,
        this.y,
        this.velocityDirection
      );

      if (nextWaypoint) {
        this.scene.physics.moveTo(
          this,
          nextWaypoint.x,
          nextWaypoint.y,
          this.movementSpeed
        );

        // Detect when we reach this waypoint, and move to the next
        if (this.waypointOverlap)
          this.scene.physics.world.removeCollider(this.waypointOverlap);
        this.waypointOverlap = this.scene.physics.add.overlap(
          this,
          nextWaypoint,
          () => {
            this.getNextWaypoint();
          }
        );
      }
      this.currentWaypoint = nextWaypoint;
    } catch (e) {
      console.error(e);
    }
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
    this.enemyTroop.doDamage(this.attackDamage);
  }

  preUpdate(time, delta) {
    let thisVel = this.body.velocity;
    if (Math.abs(thisVel.x) > Math.abs(thisVel.y)) {
      // Moving horizontally
      this.anims.play(this.animKeyPrefix + "--side", true);

      if (thisVel.x > 0) this.flipX = false;
      else this.flipX = true;
    } else {
      if (thisVel.y > 0) this.anims.play(this.animKeyPrefix + "--front", true);
      else if (thisVel.y < 0)
        this.anims.play(this.animKeyPrefix + "--back", true);
    }

    this.aggroArea.setPosition(this.x, this.y);
    this.setDepth(this.y);

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
      if (!this.currentWaypoint || this.currentWaypoint.isDestroyed) {
        this.getNextWaypoint();
      } else if (this.currentWaypoint) {
        this.scene.physics.moveTo(
          this,
          this.currentWaypoint.x,
          this.currentWaypoint.y,
          this.movementSpeed
        );
      }
    }
  }

  destroy() {
    console.log("destroy");
    this.isDestroyed = true;
    this.aggroArea.destroy();

    //if (this.waypointOverlap)
    //  this.scene.physics.world.removeCollider(this.waypointOverlap);

    super.destroy();
  }
}

export default TroopBase;
