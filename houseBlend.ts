import { Beverage } from './beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'Very good house blend';
  }

  cost() {
    return super.cost() + 2.99;
  }
}
