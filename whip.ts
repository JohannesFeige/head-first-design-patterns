import { CondimentDecorator } from './condimentDecorator';
import { Beverage } from './beverage';

export class Whip extends CondimentDecorator {
  constructor(protected beverage: Beverage) {
    super();
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Whip`;
  }
  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
