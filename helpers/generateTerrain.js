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
    const gameWidth = scene.game.config.width;
    const gameHeight = scene.game.config.height;
    const oneHalfWidth = gameWidth / 2;
    const oneFourthWidth = oneHalfWidth / 2;
    const oneFifthHeight = gameHeight / 5;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 5; j++) {
        scene.waypoints.push(
          new Waypoint(
            scene,
            oneFourthWidth + i * oneFourthWidth * 2,
            oneFifthHeight / 2 + oneFifthHeight * j
          )
        );
      }
    }
  } catch (e) {
    console.error(e);
  }
}

export default genTerrain;
