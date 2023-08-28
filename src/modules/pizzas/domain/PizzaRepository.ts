import { Pizza } from './Pizza';

export interface PizzaRepository {
  findAll(): Promise<Pizza[]>
  insert(pizza: Pizza): Promise<void>;
  findByName(name: string): Promise<Pizza | undefined>
  delete(name: string): Promise<void>
}
