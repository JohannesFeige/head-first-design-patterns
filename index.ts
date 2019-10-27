import { DarkRoast } from './darkRoast';
import { Beverage } from './beverage';
import { Espresso } from './espresso';
import { Moccha } from './moccha';
import { Whip } from './whip';
import { HouseBlend } from './houseBlend';
import { Soy } from './soy';

const beverage = new Espresso();
print(beverage);

let beverage2 = new DarkRoast();
beverage2 = new Moccha(beverage2);
beverage2 = new Moccha(beverage2);
beverage2 = new Whip(beverage2);
print(beverage2);

let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Moccha(beverage3);
beverage3 = new Whip(beverage3);
print(beverage3);

function print(beverage: Beverage) {
  console.log(`${beverage.getDescription()} -> ${beverage.cost().toFixed(2)}€`);
}
