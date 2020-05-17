// Dynamically populate the animations from our Troop classes
const animNames = ["npc"]; // Default animation

function genAnims(scene) {
  // Create the animations we need from the player spritesheet
  const anims = scene.anims;

  for (let i = 0; i < animNames.length; i++) {
    const anim = animNames[i];

    anims.create({
      key: `${anim}--front`,
      frames: anims.generateFrameNumbers(anim, {
        start: 0,
        end: 0
      }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: `${anim}--back`,
      frames: anims.generateFrameNumbers(anim, {
        start: 1,
        end: 1
      }),
      frameRate: 12,
      repeat: -1
    });
    anims.create({
      key: `${anim}--side`,
      frames: anims.generateFrameNumbers(anim, {
        start: 2,
        end: 2
      }),
      frameRate: 12,
      repeat: -1
    });
  }
}

export default genAnims;
