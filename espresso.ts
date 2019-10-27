import { Beverage } from './beverage';

export class Espresso extends Beverage {
  /**
   *
   */
  constructor() {
    super();
    this.description = 'Some coffein, less water';
  }

  cost() {
    return super.cost() + 2.99;
  }
}
