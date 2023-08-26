import { Pizza, PizzaRepository } from '../../domain';

export class FakePizzaRepository implements PizzaRepository {
  private pizzas: Pizza[] = [];

  async insert(pizza: Pizza): Promise<void> {
    this.pizzas.push(pizza);
  }

  async findByName(name: string): Promise<Pizza | undefined> {
    return this.pizzas.find((pizza) => pizza.name === name);
  }

  async delete(name: string): Promise<void> {
    const index = this.pizzas.findIndex((pizza) => pizza.name === name);
    if (index !== -1) {
      this.pizzas.splice(index, 1);
    }
  }
}
