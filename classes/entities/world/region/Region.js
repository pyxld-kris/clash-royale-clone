/**
 * Region
 *
 * Contains a representation of the generated world in memory
 * Provides functions for generating, manipulating, and
 * accessing the world.
 */

import Phaser from "phaser";
import Entity from "../../Entity.js";
import Mixins from "../../.mixins";

import Locations from "../locations";

export default class Region extends Entity {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene);
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {}
}
