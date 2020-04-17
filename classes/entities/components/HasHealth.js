var HasHealth = {
  currentHealth: 100,
  overallHealth: 100,
  healthDisplay: null,

  // <Setters>
  setCurrentHealth(health) {
    this.currentHealth = health;
    this.updateHealthDisplay();
  },

  setOverallHealth(health) {
    this.currentHealth = health;
    this.overallHealth = health;
    this.updateHealthDisplay();
  },
  // </Setters>

  deductHealth(amount) {
    this.currentHealth -= amount;
    this.updateHealthDisplay();
    this.checkIfDead();
  },

  initHealthBar() {
    this.healthDisplay = this.scene.add
      .text(this.x, this.y, this.currentHealth, {
        fontSize: "8px",
        color: "white"
      })
      //.bitmapText(x, y, "teeny-tiny-pixls", "S" + this.health, 20)
      .setOrigin(0.5, 0.5)
      .setDepth(999999); //.setOffset(0.5, 1);
  },

  updateHealthDisplay() {
    if (this.healthDisplay) this.healthDisplay.setText(this.currentHealth);
  },

  checkIfDead() {
    if (this.currentHealth <= 0) this.destroy();
  },

  // <Hook into phaser and internal events>

  // Called when an entity with this component is updated
  _preUpdate() {
    if (this.healthDisplay)
      this.healthDisplay.setPosition(this.x, this.y - this.height);
  },

  // Called when an entity with this component is destroyed
  _destroy() {
    if (this.healthDisplay) this.healthDisplay.destroy();
  }
  // </Hook into phaser and internal events>
};

export default HasHealth;
