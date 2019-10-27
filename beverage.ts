export abstract class Beverage {
  description: string = 'Unkown';
  private milk: boolean = false;
  private soy: boolean = false;
  private moccha: boolean = false;
  private whip: boolean = false;

  private milkCost = 0.3;
  private soyCost = 0.5;
  private mocchaCost = 0.5;
  private whipCost = 0.2;

  getDescription() {
    return this.description;
  }

  cost() {
    let cost = 0;

    if (this.hasMilk()) {
      cost += this.milkCost;
    }

    if (this.hasSoy()) {
      cost += this.soyCost;
    }

    if (this.hasMoccha()) {
      cost += this.mocchaCost;
    }

    if (this.hasWhip()) {
      cost += this.whipCost;
    }

    return cost;
  }

  hasMilk() {
    return this.milk;
  }

  setMilk(milk: boolean) {
    this.milk = milk;
  }

  hasSoy() {
    return this.soy;
  }

  setSoy(soy: boolean) {
    this.soy = soy;
  }

  hasMoccha() {
    return this.hasMoccha;
  }

  setMoccha(moccha: boolean) {
    this.moccha = moccha;
  }

  hasWhip() {
    return this.whip;
  }

  setWhip(whip: boolean) {
    this.whip = whip;
  }
}
