import path from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { Pizza, PizzaRepository } from '../../domain';

const PATH_MOCK_DATA = path.join(__dirname, './data.json');

export class FakePizzaRepository implements PizzaRepository {
  private path: string;

  constructor() {
    this.path = PATH_MOCK_DATA;
  }

  async insert(pizza: Pizza): Promise<void> {
    const data = JSON.parse(readFileSync(this.path, 'utf-8')) as Pizza[];
    data.push(pizza);
    writeFileSync(this.path, JSON.stringify(data, null, 2), 'utf-8');
  }

  async findByName(name: string): Promise<Pizza | undefined> {
    const data = JSON.parse(readFileSync(this.path, 'utf-8')) as Pizza[];
    const pizza = data.find((p) => p.name.toLowerCase() === name.toLowerCase());
    return pizza;
  }
}
