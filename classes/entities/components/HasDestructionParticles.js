class HasDestructionParticles {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasDestructionParticles.methods = {
  // Called when an entity with this component is destroyed
  _destroy() {
    var particles = this.scene.add.particles("npc");
    var emitter = particles.createEmitter({
      // **basic properties of particles**
      // **initial position**
      x: { min: this.x - this.width / 2, max: this.x + this.width / 2 }, //{ min, max}, or { min, max, steps }
      y: { min: this.y - this.height / 2, max: this.y }, // { min, max }, or { min, max, steps }
      //follow: this,
      // followOffset: {
      //    x: 0,
      //    y: 0
      // },
      // **emit zone**
      // emitZone: {
      //     type: 'random',    // 'random', or 'edge'
      //     source: geom,      // Geom like Circle, or a Path or Curve
      //     **type = edge**
      //     quantity: 1,
      //     stepRate: 0,
      //     yoyo: false,
      //     seamless: true
      // },

      // **target position**
      // moveToX:          // { min, max }, or { min, max, steps }
      // moveToY:          // { min, max }, or { min, max, steps }
      // **death zone**
      // deathZone: {
      //      type: 'onEnter',  // 'onEnter', or 'onLeave'
      //      source: geom      // Geom like Circle or Rect that supports a 'contains' function
      // }

      // **angle**
      // radial: true,
      // angle: { min: 0, max: 360 },  // { start, end, steps }

      // **scale**
      scale: 0.2, // { start, end },
      // scaleX: 1,
      // scaleY: 1,

      // **render**
      // frame:                // one or more texture frames, or a configuration object.
      // alpha: 1,             // { min, max }
      // visible: true,
      tint: 0xff7777, // a number 0xfffffff, or an array [ 0xffff00, 0xff0000, 0x00ff00, 0x0000ff ]
      blendMode: "MIXX", // Phaser.BlendModes

      // delay: 0,
      lifespan: 1500, // { min, max }, or { min, max, steps }

      // **physics**
      //speed: { min: 8, max: 25 }, // { min, max }, or { min, max, steps }
      speedX: { min: -20, max: 20 }, // { min, max }, or { min, max, steps }
      speedY: { min: -10, max: -50 }, // { min, max }, or { min, max, steps }
      // gravityX:
      // gravityY: 10,
      accelerationX: 0,
      accelerationY: 40,
      // maxVelocityX: 10000,
      // maxVelocityY: 10000,

      // **bounce**
      // bounce: 0,
      // bounds: nul,           // Phaser.Geom.Rectangle, or { x, y, width, height }
      // collideBottom: true,
      // collideTop: true,
      // collideLeft: true,
      // collideRight : true,

      // **callback**
      // emitCallback: null,
      // emitCallbackScope: null,
      // deathCallback: null,
      // deathCallbackScope: null,

      // **custom particle**
      // particleClass: Phaser.GameObjects.Particles.Particle

      // **emitter**
      // name: '',
      // on: true,          // set false to stop emitter
      // active: true,      // set false to pause emitter and particles
      // frequency: 0,      // -1 for exploding emitter
      quantity: 4, // { min, max }
      maxParticles: 20
      // rotate: 0,         // { start, end }, or { start, end, ease },
      // timeScale: 1,
    });
  }
};

export default HasDestructionParticles;
