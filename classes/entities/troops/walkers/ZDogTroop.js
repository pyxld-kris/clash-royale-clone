import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class ZDogTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(10);
    // </movement stuff>

    // <health>
    this.setOverallHealth(40);
    // </health>

    // <effect stuff>
    this.setAttentionRange(30);
    this.setEffectRange(20);
    this.setEffectRate(1500);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(20);
    // </damage effect stuff>

    // <cost>
    this.setCost(4);
    // </cost>

    this.setMaxVelocity(this.movementSpeed);
  }

  destroy() {
    super.destroy();
  }
}

const STATIC = ZDogTroop;
STATIC.ANIM_KEY_PREFIX = "troop--z-dog";
STATIC.NAME = "ZDogTroop";
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new ZDogTroop({
    ...config,
    x: config.x,
    y: config.y
  });
  new ZDogTroop({
    ...config,
    x: config.x + 10,
    y: config.y + 10
  });
  new ZDogTroop({
    ...config,
    x: config.x - 10,
    y: config.y - 10
  });
  new ZDogTroop({
    ...config,
    x: config.x - 10,
    y: config.y + 10
  });
  new ZDogTroop({
    ...config,
    x: config.x + 10,
    y: config.y - 10
  });
};

export default ZDogTroop;
