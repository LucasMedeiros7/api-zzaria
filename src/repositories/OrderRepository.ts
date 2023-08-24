import { Order } from '../model/Order';

export interface OrderRepository {
  insert(order: Order): Promise<void>
  insertMany(orders: Order[]): Promise<void>
}
