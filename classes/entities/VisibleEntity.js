import Phaser from "phaser";
import Entity from "./Entity";

export default class VisibleEntity extends Entity {
  constructor(extraMixins, scene, x, y, imageKey) {
    try {
      const MIXINS = [];

      super([...MIXINS, ...extraMixins], scene, x, y, imageKey);
      this.scene = scene;
      this.isDestroyed = false;

      /*
      // This is a Phaser Container, so if we passed a sprite key, we want to actually create a sprite in this container
      this.add(scene.add.sprite(0, 0, sprite));
      */

      // Add to rendering engine
      scene.add.existing(this);
    } catch (e) {
      console.log(e);
    }
  }
}
