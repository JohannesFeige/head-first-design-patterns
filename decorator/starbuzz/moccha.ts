import { CondimentDecorator } from './condimentDecorator';
import { Beverage } from './beverage';

export class Moccha extends CondimentDecorator {
  constructor(protected beverage: Beverage) {
    super();
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Moccha`;
  }
  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}
