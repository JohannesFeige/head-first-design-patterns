import { Pizza } from './pizza';
import { SimplePizzaFactory } from './simplePizzaFactory';

export class PizzaStore {
  constructor(private factory: SimplePizzaFactory) {}

  orderPizza(type: string): Pizza | null {
    const pizza = this.factory.orderPizza(type);

    if (pizza) {
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
    }
    return pizza;
  }
}
