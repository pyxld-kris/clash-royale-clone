// Player represents the viewer of the game world, the entity the camera is attached to

import Phaser from "phaser";

import Locations from "../entities/world/locations";
import NPCs from "../entities/npcs";
import Conversation from "../entities/conversations/Conversation";

class Player {
  constructor(scene) {
    this.scene = scene;
    this.currentLocation = null;
    this.currentConversation = null;

    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const halfWorldWidth = worldWidth / 2;
    const halfWorldHeight = worldHeight / 2;

    this.beginRandomEncounter();
    scene.input.on("pointerdown", () => {
      this.beginRandomEncounter();
    });
  }

  travelTo(locationKey) {
    if (this.currentLocation) this.currentLocation.destroy();
    if (this.currentConversation) this.currentConversation.destroy();
    if (this.npc) this.npc.destroy();

    let camera = this.scene.cameras.main;
    camera.fadeOut(1000, 0, 0, 0, () => {
      let locationClass = Locations[locationKey];
      this.currentLocation = new locationClass(this.scene);
      camera.fadeIn();
    });
  }

  beginConversationWith(npc) {
    //this.currentConversation = new Conversation(this.scene, this, npc);
  }

  beginRandomEncounter() {
    let locationKeys = Object.keys(Locations);
    this.travelTo(locationKeys.getRandomEntry());

    let npcArray = Object.values(NPCs);
    let randomClass = npcArray.getRandomEntry();
    this.npc = new randomClass(this.scene);
    //this.beginConversationWith(this.npc);
  }

  destroy() {
    this.currentLocation.destroy();
  }
}

export default Player;
