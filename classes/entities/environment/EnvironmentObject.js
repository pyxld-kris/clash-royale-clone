import Components from "../components";

import PhysicalEntity from "../PhysicalEntity.js";

const MIXINS = [];

export default class EnvironmentObject extends PhysicalEntity {
  constructor(
    extraMixins,
    scene,
    x,
    y,
    imageKey,
    isPhysical = false,
    depthOffset = 0
  ) {
    super(
      [...MIXINS, ...extraMixins], // Combine our mixins
      scene,
      x,
      y,
      imageKey
    );

    if (isPhysical) {
      // Fix the hitbox of this physics object
      const width = this.width;
      const height = this.height;
      this.setSize(width, parseInt(height / 2, 0)).setOffset(0, height / 2);

      this.body.setImmovable(true);
    }

    this.setOrigin(0.5, 1);

    // Keep this image visually correct
    this.setDepth(this.y + depthOffset);
  }

  destroy() {
    super.destroy();
  }
}
