import { Pizza } from './pizza';
import { CheesePizza } from './cheesePizza';
import { PeperoniPizza } from './pepperoniPizza';
import { ClamPizza } from './clamPizza';
import { VeggiePizza } from './veggiePizza';

export class SimplePizzaFactory {
  orderPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new PeperoniPizza();
    } else if (type === 'clam') {
      pizza = new ClamPizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    }

    return pizza;
  }
}
