import { Beverage } from './beverage';

export class DarkRoast extends Beverage {
  /**
   *
   */
  constructor() {
    super();
    this.description = 'Most excellent Dark Roast';
  }

  cost() {
    return super.cost() + 2.99;
  }
}
