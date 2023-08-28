import {
  it, expect, describe, beforeAll,
} from 'vitest';
import { FakePizzaRepository } from '../repositories';
import { DeletePizzaUseCase } from './DeletePizza';
import { Pizza, PizzaRepository } from '../../domain';

describe('Delete pizza use case', () => {
  let pizzaRepository: PizzaRepository;

  beforeAll(async () => {
    pizzaRepository = new FakePizzaRepository();
    await pizzaRepository.insert(new Pizza('PizzaToDelete', 10, ['any']));
    await pizzaRepository.insert(new Pizza('PersistedPizza', 10, ['any']));
  });

  it('should delete an existing pizza', async () => {
    const deletePizza = new DeletePizzaUseCase(pizzaRepository);

    await deletePizza.execute('PizzaToDelete');
    const deletedPizza = await pizzaRepository.findByName('PizzaToDelete');
    const persistedPizza = await pizzaRepository.findByName('PersistedPizza');

    expect(deletedPizza).toBeUndefined();
    expect(persistedPizza?.name).toBe('PersistedPizza');
  });

  it('should throw an error when trying to delete a non-existent pizza', async () => {
    const deletePizza = new DeletePizzaUseCase(pizzaRepository);

    const nonExistentPizzaName = 'NonExistentPizza';
    await expect(deletePizza.execute(nonExistentPizzaName)).rejects.toThrow();
  });
});
