import { Scene } from "phaser";

export default class LoadingScene extends Scene {
  constructor() {
    super("LoadingScene");
  }

  nextScene() {
    this.scene.start("TitleScene");
  }

  preload() {
    // Actual loading follows
    this.load.bitmapFont(
      "teeny-tiny-pixls",
      "assets/fonts/teeny-tiny-pixls.png",
      "assets/fonts/teeny-tiny-pixls.fnt"
    );

    this.load.image("background", "assets/background.png");
    this.load.image("tower", "assets/tower.png");
    this.load.image("bridge", "assets/bridge.png");
    this.load.image("building-outer", "assets/building-outer.png");
    this.load.image("rock", "assets/rock.png");
    this.load.image("grass", "assets/grass.png");
    this.load.image("sapling", "assets/sapling.png");
    this.load.image("tree", "assets/tree.png");
    this.load.image("tree-trunk", "assets/tree-trunk.png");
    this.load.spritesheet("character", "assets/character.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet("npc", "assets/npc.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet("troop--evil", "assets/troop--evil.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet("troop--lil-demon", "assets/troop--lil-demon.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet(
      "troop--battle-otter",
      "assets/troop--battle-otter.png",
      {
        frameWidth: 16,
        frameHeight: 19
      }
    );
    this.load.spritesheet("troop--baby-cow", "assets/troop--baby-cow.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet("troop--alien", "assets/troop--alien.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet(
      "troop--magic-puppy",
      "assets/troop--magic-puppy.png",
      {
        frameWidth: 16,
        frameHeight: 19
      }
    );
    this.load.spritesheet("troop--quacker", "assets/troop--quacker.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    this.load.spritesheet("troop--z-dog", "assets/troop--z-dog.png", {
      frameWidth: 18,
      frameHeight: 19
    });

    // Clown Guy
    this.load.spritesheet("troop--clown-guy", "assets/troop--clown-guy.png", {
      frameWidth: 16,
      frameHeight: 19
    });
    // Clown Lady
    this.load.spritesheet("troop--clown-lady", "assets/troop--clown-lady.png", {
      frameWidth: 16,
      frameHeight: 20
    });

    // Witch
    this.load.spritesheet("troop--witch", "assets/troop--witch.png", {
      frameWidth: 16,
      frameHeight: 19
    });

    // Mama Cow
    this.load.spritesheet("troop--mama-cow", "assets/troop--mama-cow.png", {
      frameWidth: 26,
      frameHeight: 19
    });

    // Valcano
    this.load.spritesheet("troop--volcano", "assets/troop--volcano.png", {
      frameWidth: 26,
      frameHeight: 19
    });

    // Dino
    this.load.spritesheet("troop--dino", "assets/troop--dino.png", {
      frameWidth: 16,
      frameHeight: 19
    });

    this.load.spritesheet("troop--chickphin", "assets/troop--chickphin.png", {
      frameWidth: 16,
      frameHeight: 20
    });

    this.load.spritesheet("troop--tank", "assets/troop--tank.png", {
      frameWidth: 34,
      frameHeight: 20
    });

    this.load.spritesheet("rainSplash", "assets/rainSplash.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    // Create waypoint image with texture generation
    let circle = this.add.graphics();
    circle.fillStyle(0xffffff, 1);
    circle.fillCircle(10, 10, 10);
    circle.generateTexture("waypoint");
    circle.destroy();
  }

  // The rest of this file makes the visual loading bar work!
  create() {
    // Loading bar code
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    this.add
      .bitmapText(centerX, centerY - 24, "teeny-tiny-pixls", "Loading", 10)
      .setOrigin(0.5, 0.5);
  }

  init() {
    // Loading bar code
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    let barWidth = this.cameras.main.width - 24;
    let barHeight = 25;

    var progressBox = this.add.rectangle(
      centerX,
      centerY,
      barWidth,
      barHeight,
      0x000000
    );
    var progressBar = this.add
      .rectangle(
        progressBox.x - parseInt(progressBox.width / 2),
        centerY,
        barWidth,
        barHeight,
        0xffffff
      )
      .setOrigin(0, 0.5)
      .setScale(0, 1);

    this.load.on("progress", value => {
      console.log(value);
      progressBar.setScale(value, 1);
    });

    this.load.on("complete", () => {
      this.nextScene();
      this.loadingProgressComplete = true;
    });
    ////////////////////////////////////////
  }
}
