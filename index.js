import Phaser from "phaser";
import { config } from "./settings/config.js";

// Set up some globally accessible helper stuff here
Array.prototype.getRandomEntry = function() {
  return this[Math.floor(Math.random() * this.length)];
};

try {
  var game = new Phaser.Game(config);

  // Enable access globally for console access
  window.game = game;
} catch (e) {
  console.error(e);
}
