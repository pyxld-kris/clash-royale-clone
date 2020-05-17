import Phaser from "phaser";
import VisibleEntity from "../VisibleEntity.js";

import Mixins from "../.mixins";

export default class DialogBox extends VisibleEntity {
  constructor(scene, title, text) {
    const MIXINS = [
      Mixins.IsAttachedToCamera,
      Mixins.HasDialogBackground,
      Mixins.HasDialogText,
      Mixins.HasNametag,
      Mixins.IsInFront
    ];

    super(MIXINS, scene);

    this.title = title;
    this.text = text;
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    const gameWidth = this.scene.game.config.width;
    const gameHeight = this.scene.game.config.height;

    // x, y, width, height, color, alpha
    this.setDialogBackground(
      2,
      48,
      gameWidth - 4,
      gameHeight / 2.5,
      0x000,
      0.5
    );

    // x, y, width, text
    this.setDialogText(
      gameWidth / 2,
      gameHeight - gameHeight / 2.5,
      gameWidth - 6,
      this.text
    );

    try {
      this.createNametag(2, 48, 120, 7, this.title);
    } catch (e) {
      console.error(e);
    }
  }
}
