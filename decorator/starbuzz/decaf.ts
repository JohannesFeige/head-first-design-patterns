import { Beverage } from './beverage';

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf Coffee';
  }

  cost() {
    return 1.05;
  }
}
