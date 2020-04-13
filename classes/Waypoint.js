import Phaser from "phaser";

// TODO: make troops/entities reference waypoints when moving

class Waypoint extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y) {
    super(scene, x, y, 10, 10, 0xff9900);

    // Add to rendering engine
    scene.add
      .existing(this)
      .setOrigin(0.5, 0.5)
      .setDepth(10000);

    STATIC.pointers.push(this);
  }

  destroy() {
    let waypointIndex = Waypoint.pointers.indexOf(this);
    Waypoint.pointers = Waypoint.pointers.splice(waypointIndex, 1);

    super.destroy();
  }
}

const STATIC = Waypoint;

STATIC.getNext = function(x, y) {
  // Returns nearest waypoint, excluding waypoints within
  // a certain threshold distance (prevents returning waypoints
  // characters are on top of)
  const DISTANCE_THRESHOLD = 5;

  const waypoints = Waypoint.pointers;
  let nearestDistance = 999999999;
  let nearestWaypoint = null;
  for (let i = 0; i < waypoints.length; i++) {
    let thisWaypoint = waypoints[i];
    let distance = Phaser.Math.Distance.Between(
      x,
      y,
      thisWaypoint.x,
      thisWaypoint.y
    );

    if (distance < DISTANCE_THRESHOLD) continue; // Waypoint is too close

    if (distance < nearestDistance) {
      nearestWaypoint = thisWaypoint;
    }
  }

  return nearestWaypoint;
};
STATIC.pointers = [];

export default Waypoint;
