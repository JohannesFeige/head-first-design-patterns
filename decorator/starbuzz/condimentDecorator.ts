import { Beverage } from './beverage';

export abstract class CondimentDecorator extends Beverage {
  protected abstract beverage: Beverage;
  abstract getDescription(): string;
}
