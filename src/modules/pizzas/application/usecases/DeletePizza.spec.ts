import { it, expect, describe } from 'vitest';
import { FakePizzaRepository } from '../repositories';
import { DeletePizzaUseCase } from './DeletePizza';
import { Pizza } from '../../domain';

describe('Delete pizza use case', () => {
  it('should delete an existing pizza', async () => {
    const pizzaRepository = new FakePizzaRepository();
    const deletePizza = new DeletePizzaUseCase(pizzaRepository);

    pizzaRepository.insert(new Pizza('PizzaToDelete', 10, ['any']));
    pizzaRepository.insert(new Pizza('PersistedPizza', 10, ['any']));

    await deletePizza.execute('PizzaToDelete');

    const deletedPizza = await pizzaRepository.findByName('PizzaToDelete');
    const persistedPizza = await pizzaRepository.findByName('PersistedPizza');

    // Expecting the pizza to be deleted and not found in the repository
    expect(deletedPizza).toBeUndefined();
    expect(persistedPizza?.name).toBe('PersistedPizza');
  });

  // it('should throw an error when trying to delete a non-existent pizza', async () => {
  //   const pizzaRepository = new FakePizzaRepository();
  //   const deletePizza = new DeletePizzaUseCase(pizzaRepository);

  //   const nonExistentPizzaName = 'NonExistentPizza';
  //   await expect(deletePizza.execute(nonExistentPizzaName)).rejects.toThrow();
  // });
});
