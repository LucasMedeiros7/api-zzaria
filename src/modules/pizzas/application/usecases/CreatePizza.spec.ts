import { it, expect, describe } from 'vitest';

import { CreatePizzaUseCase } from '.';
import { FakePizzaRepository } from '../repositories';

describe('Create pizza use case', () => {
  it('should create a pizza with valid name, price, and ingredients', async () => {
    const pizzaRepository = new FakePizzaRepository();
    const createPizza = new CreatePizzaUseCase(pizzaRepository);

    const newPizza = {
      name: 'New Pizza',
      price: 8,
      ingredients: ['ingredient 1', 'ingredient 2'],
    };

    await createPizza.execute(newPizza);
    const pizza = await pizzaRepository.findByName(newPizza.name);

    expect(pizza?.name).toBe('New Pizza');
    expect(pizza?.price).toBe(8);
    expect(pizza?.ingredients).toEqual(['ingredient 1', 'ingredient 2']);
  });

  it('should not create a pizza with negative price', async () => {
    const pizzaRepository = new FakePizzaRepository();
    const createPizza = new CreatePizzaUseCase(pizzaRepository);

    const newPizza = {
      name: 'Negative Price Pizza',
      price: -5,
      ingredients: ['ingredient 1', 'ingredient 2'],
    };

    await expect(createPizza.execute(newPizza)).rejects.toThrow();
  });
});
