import { PizzaRepository } from '../../domain/PizzaRepository';

export class DeletePizzaUseCase {
  constructor(private readonly pizzaRepository: PizzaRepository) {}

  async execute(pizzaName: string) {
    const existingPizza = await this.pizzaRepository.findByName(pizzaName);
    if (!existingPizza) {
      throw new Error(`Pizza with name "${pizzaName}" not found.`);
    }
    await this.pizzaRepository.delete(existingPizza.name);
  }
}
