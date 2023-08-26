import { describe, expect, it } from 'vitest';
import { FakePizzaRepository } from './FakePizzaRepository';
import { Pizza } from '../../domain';

describe('FakePizzaRepository', () => {
  it('should insert a pizza', async () => {
    const fakeRepo = new FakePizzaRepository();
    const pizza = new Pizza('Margherita', 8, ['tomato', 'mozzarella']);

    await fakeRepo.insert(pizza);
    const foundPizza = await fakeRepo.findByName('Margherita');

    expect(foundPizza).toEqual(pizza);
  });

  it('should find a pizza by name', async () => {
    const fakeRepo = new FakePizzaRepository();
    const pizza = new Pizza('Pepperoni', 8, ['pepperoni', 'cheese']);

    await fakeRepo.insert(pizza);
    const foundPizza = await fakeRepo.findByName('Pepperoni');

    expect(foundPizza).toEqual(pizza);
  });

  // it('should return undefined for non-existent pizza', async () => {
  //   const fakeRepo = new FakePizzaRepository();

  //   const foundPizza = await fakeRepo.findByName('Hawaiian');

  //   expect(foundPizza).toBeUndefined();
  // });

  // it('should delete a pizza by name', async () => {
  //   const fakeRepo = new FakePizzaRepository();
  //   const pizza: Pizza = { name: 'Supreme', ingredients: ['sausage', 'peppers', 'onions'] };
  //   await fakeRepo.insert(pizza);

  //   await fakeRepo.delete('Supreme');
  //   const foundPizza = await fakeRepo.findByName('Supreme');

  //   expect(foundPizza).toBeUndefined();
  // });

  // it('should not throw error when deleting non-existent pizza', async () => {
  //   const fakeRepo = new FakePizzaRepository();

  //   await expect(fakeRepo.delete('Mushroom')).resolves.not.toThrow();
  // });
});
