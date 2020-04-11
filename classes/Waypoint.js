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

    Waypoint.pointers.push(this);
  }

  destroy() {
    let waypointIndex = Waypoint.pointers.indexOf(this);
    Waypoint.pointers = Waypoint.pointers.splice(waypointIndex, 1);

    super.destroy();
  }
}

Waypoint.getNearest = function(x, y) {
  const waypoints = Waypoint.pointers;
  let nearestDistance = 999999999;
  let nearestWaypoint = null;
  for (let i = 0; i < waypoints.length; i++) {
    let thisWaypoint = waypoints[i];
    if (
      Phaser.Math.Distance.Between(x, y, thisWaypoint.x, thisWaypoint.y) <
      nearestDistance
    ) {
      nearestWaypoint = thisWaypoint;
    }
  }

  return nearestWaypoint;
};
Waypoint.pointers = [];

export default Waypoint;
