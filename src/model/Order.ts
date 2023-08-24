import { Pizza } from '../controllers/PizzasController';

export interface Order {
  id: string
  pizza: Pizza
  quantity: number
}
