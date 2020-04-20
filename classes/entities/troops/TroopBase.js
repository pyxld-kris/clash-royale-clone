import Phaser from "phaser";

import Components from "../components";

import PhysicalEntity from "../PhysicalEntity.js";
import Waypoint from "../waypoints/Waypoint.js";

const MIXINS = [
  //Components.CanAttack,
  Components.CanBeAttacked,
  Components.CanBeSpawned,
  Components.HasHealth,

  Components.HasEffects,
  Components.HasDamageEffect
];

class TroopBase extends PhysicalEntity {
  constructor(extraMixins, config) {
    super(
      [...MIXINS, ...extraMixins], // Combine our mixins
      config.scene,
      config.x,
      config.y,
      "character"
    );

    // destructure things we'll use a lot (like the scene)
    const { scene } = config;
    this.scene = scene;

    // Fix the hitbox of this physics object and set Phaser settings
    const width = this.width;
    const height = this.height;
    this.setCircle(width / 2 - 4, 4, height / 2 + 1)
      .setCollideWorldBounds(true)
      .setMaxVelocity(30, 30)
      .setDrag(10)
      .setBounce(0.5)
      .setFriction(10)
      .setOrigin(0.5, 1)
      .setDepth(this.y);

    // <Initialize our own stuff>
    this.owner = config.owner; // A Player object
    this.velocityDirection = config.velocityDirection;
    //this.setVelocityDirection(config.velocityDirection);

    this.setOverallHealth(100);
    //this.initHealthBar(); // From HasHealth component

    this.animKeyPrefix = config.animKeyPrefix;
    // </Initialize our own stuff>

    // default starting anim
    this.anims.play(`${this.animKeyPrefix}--front`, true);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
  }

  destroy() {
    super.destroy();
  }
}

export default TroopBase;
