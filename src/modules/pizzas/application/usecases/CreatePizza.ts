import { Pizza } from '../../domain/Pizza';
import { PizzaRepository } from '../../domain/PizzaRepository';
import { CreatePizzaDTO } from '../dtos';

export class CreatePizzaUseCase {
  constructor(private readonly pizzaRepository: PizzaRepository) {}

  async execute({ name, price, ingredients }: CreatePizzaDTO) {
    const pizza = new Pizza(name, price, ingredients);
    await this.pizzaRepository.insert(pizza);
  }
}
