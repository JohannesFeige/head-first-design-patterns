import { Beverage } from './beverage';

export class Decaf extends Beverage {
  /**
   *
   */
  constructor() {
    super();
    this.description = 'Like House Blend but without coffein.';
  }

  cost() {
    return super.cost() + 2.49;
  }
}
