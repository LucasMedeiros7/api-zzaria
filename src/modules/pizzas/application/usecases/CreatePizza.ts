import { Pizza } from '../../domain/Pizza';
import { PizzaRepository } from '../../domain/PizzaRepository';

export class CreatePizzaUseCase {
  constructor(private readonly pizzaRepository: PizzaRepository) {}

  async execute(pizza: Pizza) {
    if (pizza.price <= 0) {
      throw new Error('Pizza price must be positve');
    }
    await this.pizzaRepository.insert(pizza);
  }
}
