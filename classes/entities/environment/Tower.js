import EnvironmentObject from "./EnvironmentObject.js";
import Components from "../components";

import Waypoint from "../waypoints/Waypoint.js";

const MIXINS = [Components.HasHealth, Components.CanAttack];

export default class Tower extends EnvironmentObject {
  constructor(scene, owner, x, y) {
    super(MIXINS, scene, x, y, "tower", true, -6);
    this.owner = owner;

    // Add towers to troop groups to allow troops to attack towers
    this.owner.troops.add(this);
    this.setImmovable(true);

    this.setTint(0x885500);

    this.setOverallHealth(1000);
    this.initHealthBar(); // From HasHealth component

    this.initAggroArea(30); // From CanAttack component
    this.owner.aggroAreas.add(this.aggroArea);

    // Create waypoints on either side of this towers, so troops can move around them
    this.waypoints = [
      new Waypoint(scene, x - 22, y - 10),
      new Waypoint(scene, x + 22, y - 10),
      new Waypoint(scene, x - 22, y + 10),
      new Waypoint(scene, x + 22, y + 10)
    ];
  }

  destroy() {
    // destroy waypoints
    for (let waypoint of this.waypoints) {
      waypoint.destroy();
    }
    this.isDestroyed = true;
    this.healthDisplay.destroy();

    // Delay the event so this tower will be destroyed when the vent propegates
    var scene = this.scene;
    setTimeout(function() {
      scene.events.emit("tower-destroyed");
    }, 500);

    super.destroy();
  }
}
