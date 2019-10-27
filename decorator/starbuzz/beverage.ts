export abstract class Beverage {
  description: string = 'Unkown';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}
