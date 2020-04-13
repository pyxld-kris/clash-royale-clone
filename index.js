import Phaser from "phaser";
import { config } from "./settings/config.js";

try {
  new Phaser.Game(config);
} catch (e) {
  console.error(e);
}
