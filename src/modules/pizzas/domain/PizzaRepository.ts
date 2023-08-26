import { Pizza } from './Pizza';

export interface PizzaRepository {
  insert(pizza: Pizza): Promise<void>;
  findByName(name: string): Promise<Pizza | undefined>
  delete(name: string): Promise<void>
}
