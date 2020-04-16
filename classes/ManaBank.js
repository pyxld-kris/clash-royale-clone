import DisplayBar from "./ui/DisplayBar.js";

class ManaBank {
  constructor(scene, renderX, renderY, width, height) {
    try {
      this.scene = scene;
      this.manaAmount = 2;
      this.displaying = false;

      if (renderX && renderY) {
        console.log("creating display bar");
        this.displaying = true;
        this.displayBar = new DisplayBar(
          scene,
          renderX,
          renderY,
          width,
          height,
          10,
          0x0000ff,
          0x333333
        );
        this.renderMana();
      }

      scene.time.addEvent({
        delay: 2500,
        loop: true,
        callback: this.incrementMana,
        callbackScope: this
      });
    } catch (e) {
      console.error(e);
    }
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
    try {
      if (this.displaying) {
        this.displayBar.setValue(this.manaAmount);
      }
    } catch (e) {
      console.error(e);
    }
  }

  destroy() {
    super.destroy();
  }
}

export default ManaBank;
