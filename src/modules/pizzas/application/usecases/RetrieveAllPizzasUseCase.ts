import { PizzaRepository } from '../../domain';

export class RetrieveAllPizzasUseCase {
  constructor(private readonly pizzaRepository: PizzaRepository) {}

  async execute() {
    return this.pizzaRepository.findAll();
  }
}
