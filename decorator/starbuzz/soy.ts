import { CondimentDecorator } from './condimentDecorator';
import { Beverage } from './beverage';

export class Soy extends CondimentDecorator {
  constructor(protected beverage: Beverage) {
    super();
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`;
  }
  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}
