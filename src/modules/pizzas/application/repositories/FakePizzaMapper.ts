import { readFileSync } from 'fs';
import { Pizza } from '../../domain';

export class FakePizzaMapper {
  static retrievePizzasToDomain(path: string) {
    const allPizzasJSON = JSON.parse(readFileSync(path, 'utf-8'));
    const allPizzas: Pizza[] = [];
    for (let i = 0; i < allPizzasJSON.length; i + 1) {
      const { name } = allPizzasJSON[i];
      const { price } = allPizzasJSON[i];
      const { ingredients } = allPizzasJSON[i];
      allPizzas.push(new Pizza(name, price, ingredients));
    }
    return allPizzas;
  }

  static retrievePizzasToJSON(path: string) {
    const allPizzasJSON = JSON.parse(readFileSync(path, 'utf-8'));
    return allPizzasJSON;
  }
}
