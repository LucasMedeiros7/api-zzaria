import { Pizza } from './Pizza';

export interface PizzaRepository {
  insert(pizza: Pizza): Promise<void>;
}
