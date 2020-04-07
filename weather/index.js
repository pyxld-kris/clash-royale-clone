import DropSplash from "./particles/dropSplash";
import { Geom } from "phaser";

class WeatherSystem {
  constructor(scene) {
    this.particles = scene.add.particles("rainSplash");
    let screenRect = new Geom.Rectangle(
      0,
      0,
      scene.cameras.main.width + 128,
      scene.cameras.main.height + 128
    );
    this.splashEmitter = this.particles.createEmitter({
      x: 0,
      y: 0,
      speed: 0,
      lifespan: 600,
      quantity: 5,
      frequency: 10,
      alpha: { start: 0.2, end: 0.0 },
      scaleX: { start: 1.5, end: 2.5 },
      scaleY: { start: 0.8, end: 1.1 },
      on: true, // im retarded
      emitZone: { type: "random", source: screenRect },
      particleClass: DropSplash,
      blendMode: "ADD"
    });
    let stepEmitter = this.particles.createEmitter({
      frame: 2,
      x: 0,
      y: 0,
      speed: 0,
      lifespan: 800,
      quantity: 1,
      alpha: { start: 0.5, end: 0.0 },
      scale: { start: 1, end: 2 },
      on: false,
      particleClass: DropSplash,
      blendMode: "ADD"
    });
  }
  getBackground() {
    return this.particles;
  }
  getForeground() {
    return null;
  }
  getClouds() {
    return null;
  }
  setPosition(x, y) {
    this.splashEmitter.setPosition(x, y);
  }
}

export default WeatherSystem;
