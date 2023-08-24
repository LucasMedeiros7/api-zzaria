import { Pizza } from '../../domain/Pizza';
import { PizzaRepository } from '../../domain/PizzaRepository';

export class CreatePizzaUseCase {
  constructor(private readonly pizzaRepository: PizzaRepository) {}

  async execute(pizza: Pizza) {
    await this.pizzaRepository.insert(pizza);
  }
}
