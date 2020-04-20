import Troop from "../TroopBase.js";

import Components from "../../components";
const MIXINS = [Components.CanWalk];

class AlienTroop extends Troop {
  constructor(config) {
    super(MIXINS, {
      ...config,
      animKeyPrefix: STATIC.ANIM_KEY_PREFIX
    });
    this.setTint(0xffffff);

    // <movement stuff>
    this.setMovementSpeed(17);
    // </movement stuff>

    // <health>
    this.setOverallHealth(10);
    // </health>

    // <effect stuff>
    this.setAttentionRange(30);
    this.setEffectRange(20);
    this.setEffectRate(1000);
    // </effect stuff>

    // <damage effect stuff>
    this.setDamageAmount(10);
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

const STATIC = AlienTroop;
STATIC.ANIM_KEY_PREFIX = "troop--alien";
STATIC.NAME = "AlienTroop";
STATIC.IS_IN_DECK = true;
STATIC.COST = 3;
STATIC.doSpawn = function(config) {
  new AlienTroop({
    ...config,
    x: config.x,
    y: config.y
  });
  new AlienTroop({
    ...config,
    x: config.x + 10,
    y: config.y + 10
  });
  new AlienTroop({
    ...config,
    x: config.x - 10,
    y: config.y - 10
  });
  new AlienTroop({
    ...config,
    x: config.x - 10,
    y: config.y + 10
  });
  new AlienTroop({
    ...config,
    x: config.x + 10,
    y: config.y - 10
  });
};

export default AlienTroop;
