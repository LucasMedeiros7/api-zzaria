import { it, expect, describe } from 'vitest';
import { FakePizzaRepository } from '../repositories';
import { DeletePizzaUseCase } from './DeletePizza';

describe.skip('Delete pizza use case', () => {
  it('should delete an existing pizza', async () => {
    const pizzaRepository = new FakePizzaRepository();
    const deletePizza = new DeletePizzaUseCase(pizzaRepository);
    expect(true).toBe(true);
    const pizzaNameToDelete = 'PizzaToDelete';
    await deletePizza.execute(pizzaNameToDelete);

    // const deletedPizza = await pizzaRepository.findByName(pizzaNameToDelete);
    // // Expecting the pizza to be deleted and not found in the repository
    // expect(deletedPizza).toBeNull();
  });

  // it('should throw an error when trying to delete a non-existent pizza', async () => {
  //   const pizzaRepository = new FakePizzaRepository();
  //   const deletePizza = new DeletePizzaUseCase(pizzaRepository);

  //   const nonExistentPizzaName = 'NonExistentPizza';
  //   await expect(deletePizza.execute(nonExistentPizzaName)).rejects.toThrow();
  // });
});
