import { PizzaRepository } from '../../domain';

export class ListAllPizzasUseCase {
  constructor(private readonly pizzaRepository: PizzaRepository) {}

  async execute() {
    return this.pizzaRepository.findAll();
  }
}
