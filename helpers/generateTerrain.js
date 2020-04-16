import Phaser from "phaser";

import Tree from "../classes/environment/Tree.js";
import TreeTrunk from "../classes/environment/TreeTrunk.js";
import Rock from "../classes/environment/Rock.js";
import Grass from "../classes/environment/Grass.js";
import Waypoint from "../classes/Waypoint.js";

function genTerrain(scene) {
  // Create environment objects
  const worldWidth = scene.physics.world.bounds.width;
  const worldHeight = scene.physics.world.bounds.height;

  // Create 10 randomly positioned trees
  scene.trees = [];
  for (let i = 0; i < 3; i++) {
    let treeX = parseInt(Math.random() * worldWidth, 0);
    let treeY = parseInt(Math.random() * worldHeight, 0);
    scene.trees.push(new Tree(scene, treeX, treeY));
  }

  // Create 10 randomly positionedtree trunks
  scene.treeTrunks = [];
  for (let i = 0; i < 2; i++) {
    let treeTrunkX = parseInt(Math.random() * worldWidth, 0);
    let treeTrunkY = parseInt(Math.random() * worldHeight, 0);
    scene.treeTrunks.push(new TreeTrunk(scene, treeTrunkX, treeTrunkY));
  }

  // Create 20 randomly positioned rocks
  scene.rocks = [];
  for (let i = 0; i < 7; i++) {
    let rockX = parseInt(Math.random() * worldWidth, 0);
    let rockY = parseInt(Math.random() * worldHeight, 0);
    scene.rocks.push(new Rock(scene, rockX, rockY));
  }

  // Create 20 randomly positioned grass
  scene.grass = [];
  for (let i = 0; i < 8; i++) {
    let grassX = parseInt(Math.random() * worldWidth, 0);
    let grassY = parseInt(Math.random() * worldHeight, 0);
    scene.grass.push(new Grass(scene, grassX, grassY));
  }

  // Create the river in the middle of the playing field
  scene.river = scene.add.group();
  scene.river.add(
    // Add center
    scene.physics.add
      .existing(
        scene.add.rectangle(
          worldWidth / 2,
          worldHeight / 2,
          worldWidth / 2,
          15,
          0x3333bb
        ),
        true
      )
      .setOrigin(0.5, 0.5),

    // Add left
    scene.physics.add
      .existing(
        scene.add.rectangle(0, worldHeight / 2, worldWidth / 10, 15, 0x3333bb),
        true
      )
      .setOrigin(0, 0.5),

    // Add right
    scene.physics.add
      .existing(
        scene.add.rectangle(
          worldWidth,
          worldHeight / 2,
          worldWidth / 10,
          15,
          0x3333bb
        ),
        true
      )
      .setOrigin(1, 0.5)
  );

  // Create bridges across the river
  scene.add.sprite(28, worldHeight / 2, "bridge").setOrigin(0.5, 0.5);
  scene.add
    .sprite(worldWidth - 28, worldHeight / 2, "bridge")
    .setOrigin(0.5, 0.5);

  // TODO: Move to genTerrain
  // TODO: finish waypoints!
  // Populate some random Waypoints
  try {
    scene.waypoints = [];
    // Random waypoints
    /*
    for (let i = 0; i < 6; i++) {
      let randX = Phaser.Math.Between(0, scene.game.config.width);
      let randY = Phaser.Math.Between(0, scene.game.config.height);
      scene.waypoints.push(new Waypoint(scene, randX, randY));
    }
    */
    // Waypoint lanes
    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const oneTenthWidth = worldWidth / 10;
    const oneTwelfthHeight = worldHeight / 12;
    for (let i = 0; i < 2; i++) {
      for (let j = 2; j < 8; j += 1) {
        scene.waypoints.push(
          new Waypoint(
            scene,
            oneTenthWidth * 2 + i * oneTenthWidth * 6,
            oneTwelfthHeight * 1.5 + oneTwelfthHeight * j
          ).setTint(0xff0000)
        );
      }
    }
  } catch (e) {
    console.error(e);
  }
}

export default genTerrain;
