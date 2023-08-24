import { Pizza } from '../modules/pizzas/domain/Pizza';

export interface Order {
  id: string
  pizza: Pizza
  quantity: number
}
