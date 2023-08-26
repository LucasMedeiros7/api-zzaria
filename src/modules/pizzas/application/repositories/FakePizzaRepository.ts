import path from 'path';
import { writeFileSync } from 'fs';
import { Pizza, PizzaRepository } from '../../domain';
import { FakePizzaMapper } from './FakePizzaMapper';

const PATH_MOCK_DATA = path.join(__dirname, './data.json');

export class FakePizzaRepository implements PizzaRepository {
  private path: string;

  constructor() {
    this.path = PATH_MOCK_DATA;
  }

  async insert(pizza: Pizza): Promise<void> {
    const allPizzas = FakePizzaMapper.retrievePizzasToJSON(this.path);
    allPizzas.push(pizza);
    writeFileSync(this.path, JSON.stringify(allPizzas, null, 2), 'utf-8');
  }

  async findByName(name: string): Promise<Pizza | undefined> {
    const allPizzas = FakePizzaMapper.retrievePizzasToDomain(this.path);
    const pizza = allPizzas.find((p) => p.getValues().name.toLowerCase() === name.toLowerCase());
    return pizza;
  }
}
