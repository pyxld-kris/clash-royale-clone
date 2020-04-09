import Phaser from "phaser";
import Character from "./Character.js";

export default class Troop extends Character {
  constructor(scene, owner, x, y, imageKey, velocityDirection) {
    super(scene, x, y, imageKey, velocityDirection);
    this.scene = scene;
    this.owner = owner; // A Player object
    this.velocityDirection = velocityDirection;

    this.animKeyPrefix = "npc";

    // <attack stuff>
    this.enemyTroop = null;
    this.health = 100;
    this.lastAttackTime = -1;
    this.attackRate = 1000;
    this.attackDamage = 20;
    this.attackDistance = 10;
    this.isDestroyed = false;
    // </attack stuff>

    try {
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

      this.generateAnimations();
      this.setAcceleration(0, 50 * velocityDirection);

      scene.physics.add.collider(this, scene.trees);
      scene.physics.add.collider(this, scene.player.troops);
      scene.physics.add.collider(this, scene.opponent.troops);

      // TODO: Use phaser built in timer
      setTimeout(() => {
        this.destroy();
      }, 10000);

      Troop.pointers.push(this); // add a pointer to later reference all Troop instances

      //console.log("Troop.pointers", Troop.pointers);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  generateAnimations() {
    // Create the animations we need from the player spritesheet
    const anims = this.scene.anims;
    anims.create({
      key: "npc--front",
      frames: anims.generateFrameNumbers("npc", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "npc--back",
      frames: anims.generateFrameNumbers("npc", { start: 1, end: 1 }),
      frameRate: 12,
      repeat: -1
    });
    anims.create({
      key: "npc--side",
      frames: anims.generateFrameNumbers("npc", { start: 2, end: 2 }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.play("npc--front", true); // default starting anim
  }

  doDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) this.destroy();
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

  // TODO: make sure this is working!
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

  destroy() {
    this.isDestroyed = true;
    this.aggroArea.destroy();

    Troop.pointers.splice(Troop.pointers.indexOf(this), 1);

    super.destroy();
  }
}

Troop.pointers = [];
