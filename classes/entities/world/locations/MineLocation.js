import Phaser from "phaser";
import VisibleEntity from "../../VisibleEntity.js";

import Mixins from "../../.mixins";

export default class MineLocation extends VisibleEntity {
  constructor(scene) {
    const MIXINS = [
      Mixins.FillsEntireScreen,
      Mixins.IsInBack,
      Mixins.HasFireParticles
    ];

    super(MIXINS, scene, 0, 0, "mine");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.initFireParticles(100, 30);
  }
}
