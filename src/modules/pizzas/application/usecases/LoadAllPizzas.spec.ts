import {
  it, expect, describe, beforeAll,
} from 'vitest';
import { FakePizzaRepository } from '../repositories';
import { Pizza, PizzaRepository } from '../../domain';
import { ListAllPizzasUseCase } from './LoadAllPizzas';

describe('Delete pizza use case', () => {
  let pizzaRepository: PizzaRepository;

  beforeAll(async () => {
    pizzaRepository = new FakePizzaRepository();
    await pizzaRepository.insert(new Pizza('Pizza1', 10, ['any']));
    await pizzaRepository.insert(new Pizza('Pizza2', 10, ['any']));
    await pizzaRepository.insert(new Pizza('Pizza3', 10, ['any']));
  });

  it('should list all pizzas', async () => {
    const listPizzas = new ListAllPizzasUseCase(pizzaRepository);

    expect(await listPizzas.execute()).toHaveLength(3);
  });
});
