export default class ManaBank {
  constructor(scene, renderX, renderY) {
    this.scene = scene;
    this.manaAmount = 0;
    console.log("befopre this");
    this.displayText = scene.add
      .text(renderX, renderY, this.manaAmount, {
        fontSize: "8px",
        color: "blue"
      })
      .setOrigin(0.5, 0.5)
      .setScrollFactor(0)
      .setDepth(999999999);

    console.log("before that");

    this.renderMana();
    setInterval(() => {
      this.incrementMana();
    }, 1000);
  }

  getManaAmount() {
    return this.manaAmount;
  }

  deductMana(amount) {
    this.manaAmount -= amount;
    this.renderMana();
  }

  incrementMana() {
    if (this.manaAmount < 10) {
      this.manaAmount++;
      this.renderMana();
    }
  }

  renderMana() {
    this.displayText.setText(this.manaAmount);
  }

  destroy() {
    super.destroy();
  }
}
