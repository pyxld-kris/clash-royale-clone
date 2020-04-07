import Phaser from "phaser";
import Character from "./Character.js";

export default class Troop extends Character {
  constructor(scene, owner, x, y, imageKey, velocityDirection) {
    super(scene, x, y, imageKey, velocityDirection);
    this.scene = scene;
    this.owner = owner; // A Player object
    this.enemyTroop = null;

    console.log("velocityDirection", velocityDirection);

    try {
      console.log(1);
      // <Aggression zone stuff>
      this.aggroArea = scene.physics.add
        .existing(scene.add.rectangle(x, y, 60, 60, 0xff0000, 0.1))
        .setDepth(100);
      //this.aggroArea.troop = this;
      // </Aggression zone stuff>
      console.log(2);

      this.owner.troops.add(this);
      this.owner.aggroAreas.add(this.aggroArea);
      console.log(3);

      this.setTint(0x555599);

      this.setFriction(10)
        .setDrag(10)
        .setMaxVelocity(30, 30)
        .setBounce(0.5);

      this.generateAnimations();
      this.setAcceleration(0, 50 * velocityDirection);

      this.anims.play("npc-back", true);
      if (velocityDirection > 0) this.anims.play("npc-front", true);
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
      key: "npc-front",
      frames: anims.generateFrameNumbers("npc", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "npc-back",
      frames: anims.generateFrameNumbers("npc", { start: 1, end: 1 }),
      frameRate: 12,
      repeat: -1
    });
    anims.create({
      key: "npc-side",
      frames: anims.generateFrameNumbers("npc", { start: 2, end: 2 }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.play("npc-front", true); // default starting anim
  }
  /*
  canAttack() {
    return this.enemyTroop ? false : true;
  }
  startAttacking(troop) {
    if (!this.enemyTroop) {
      this.enemyTroop = troop;

      this.setAcceleration(0, 0);
      this.scene.physics.accelerateTo(this, troop.x, troop.y, 100);
      this.accelerateTo(this, troop, 100);
    }
  }
  */
  // TODO: make sure this is working!
  preUpdate() {
    this.aggroArea.setPosition(this.x, this.y);
    this.setDepth(this.y);
  }

  destroy() {
    this.aggroArea.destroy();

    Troop.pointers.splice(Troop.pointers.indexOf(this), 1);

    super.destroy();
  }
}

Troop.pointers = [];
