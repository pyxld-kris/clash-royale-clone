class HasDamagingInterval {
  constructor() {
    var attributes = {
      damagingIntervalAmount: 1,
      damagingIntervalRate: 1000,
      damagingIntervalReference: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasDamagingInterval.methods = {
  // Called when an entity with this component is created, after the entity has been constructed
  _init() {
    this.createDamagingInterval();
  },

  // <Getters>
  // </Getters>

  // <Setters>
  setDamagingIntervalAmount(damagingIntervalAmount) {
    this.damagingIntervalAmount = damagingIntervalAmount;
  },
  setDamagingIntervalRate(damagingIntervalRate) {
    this.damagingIntervalRate = damagingIntervalRate;
    this.createDamagingInterval();
  },
  // </Setters>

  // <Methods>
  createDamagingInterval() {
    if (this.damagingIntervalReference)
      clearInterval(this.damagingIntervalReference);
    this.damagingIntervalReference = setInterval(() => {
      this.deductHealth(this.damagingIntervalAmount);
    }, this.damagingIntervalRate);
  },
  // </Methods>

  _destroy() {
    clearInterval(this.damagingIntervalReference);
  }
};

export default HasDamagingInterval;
