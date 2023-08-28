import { PizzaRepository } from '../../domain';

export class LoadAllPizzasUseCase {
  constructor(private readonly pizzaRepository: PizzaRepository) {}

  async execute() {
    return this.pizzaRepository.findAll();
  }
}
