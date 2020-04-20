import Phaser from "phaser";

class Waypoint extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, label = "default") {
    super(scene, x, y, "sapling");

    this.isDestroyed = false;
    this.label = label;

    // Add to rendering engine
    scene.add
      .existing(this)
      .setOrigin(0.5, 0.5)
      .setDepth(10000)
      .setAlpha(0);

    // Add to physics engine
    scene.physics.add.existing(this);
    this.setImmovable(true);

    this.body.setSize(10, 10);

    STATIC.pointers.push(this);
  }

  destroy() {
    this.isDestroyed = true;
    let waypointIndex = Waypoint.pointers.indexOf(this);
    Waypoint.pointers.splice(waypointIndex, 1);

    super.destroy();
  }
}

const STATIC = Waypoint;

const DISTANCE_THRESHOLD = 20;
STATIC.getNext = function(x, y, velocityDirection, label) {
  // Returns nearest waypoint, excluding waypoints within
  // a certain threshold distance (prevents returning waypoints
  // characters are on top of)
  const waypoints = Waypoint.pointers;
  let nearestDistance = 999999999;
  let nearestWaypoint = null;
  for (let i = 0; i < waypoints.length; i++) {
    let thisWaypoint = waypoints[i];

    // Are we filtering based on a certain criteria?
    if (label && label !== thisWaypoint.label) continue;

    let distance = Phaser.Math.Distance.Between(
      x,
      y,
      thisWaypoint.x,
      thisWaypoint.y
    );

    if (distance < DISTANCE_THRESHOLD) continue; // Waypoint is too close

    // Check if this waypoint is in the correct direction for this troop (based on player)
    if (
      (y + velocityDirection * 10 - thisWaypoint.y > 5 &&
        velocityDirection > 0) ||
      (y + velocityDirection * 10 - thisWaypoint.y < 5 && velocityDirection < 0)
    )
      continue;

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestWaypoint = thisWaypoint;
    }
  }

  return nearestWaypoint;
};
STATIC.pointers = [];

export default Waypoint;
