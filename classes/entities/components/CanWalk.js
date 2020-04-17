import Waypoint from "../waypoints/Waypoint.js";

var CanWalk = {
  movementSpeed: 100,
  velocityDirection: 1,

  currentWaypoint: null,

  // <Setters>
  setMovementSpeed(movementSpeed) {
    this.movementSpeed = movementSpeed;
  },

  setVelocityDirection(velocityDirection) {
    this.velocityDirection = velocityDirection;
  },

  setCurrentWaypoint(currentWaypoint) {
    this.currentWaypoint = currentWaypoint;
  },
  // </Setters>

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
            console.log("HIT WAYPOINT");
            this.getNextWaypoint();
          }
        );
      }
      this.currentWaypoint = nextWaypoint;
    } catch (e) {
      console.error(e);
    }
  },

  /** <Hook into phaser and internal events> */

  // Called when an entity with this component is updated
  _preUpdate() {
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

    if (!this.enemyTroop || this.enemyTroop.isDestroyed) {
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

    this.setDepth(this.y);
  }
  /** </Hook into phaser and internal events> */
};

export default CanWalk;
