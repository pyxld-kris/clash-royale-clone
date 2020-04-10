
import Tree from "../classes/environment/Tree.js";
import TreeTrunk from "../classes/environment/TreeTrunk.js";
import Rock from "../classes/environment/Rock.js";
import Grass from "../classes/environment/Grass.js";

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
}

export default genTerrain;