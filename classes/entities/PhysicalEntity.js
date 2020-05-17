import Phaser from "phaser";
import VisibleEntity from "./VisibleEntity";

export default class PhysicalEntity extends VisibleEntity {
  constructor(extraMixins, scene, x, y, sprite) {
    try {
      const MIXINS = [];

      super([...MIXINS, ...extraMixins], scene, x, y, sprite);
      this.scene = scene;

      // Add to physics engine
      scene.physics.add.existing(this);
    } catch (e) {
      console.log(e);
    }
  }
}
