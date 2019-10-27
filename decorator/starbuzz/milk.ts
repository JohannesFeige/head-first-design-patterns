import { CondimentDecorator } from './condimentDecorator';
import { Beverage } from './beverage';

export class Milk extends CondimentDecorator {
  constructor(protected beverage: Beverage) {
    super();
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Milk`;
  }
  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
