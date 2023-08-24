/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import { randomUUID } from 'crypto';
import { type Pizza } from '../controllers/PizzasController';
import { OrderRepository } from '../repositories/OrderRepository';
import { Order } from '../model/Order';

interface OrderRequest {
  pizzaName: string
  quantity: number
}

export class OrdersService {
  constructor(
    private readonly orders: Order[],
    private readonly menu: Pizza[],
    private readonly orderRepository: OrderRepository,
  ) {}

  async createNewOrder(orderRequest: OrderRequest) {
    const pizza = this.findPizzaByName(orderRequest.pizzaName);
    if (!pizza) return 'failed';
    const newOrder = {
      id: randomUUID(),
      pizza,
      quantity: orderRequest.quantity,
    };
    await this.orderRepository.insert(newOrder);
  }

  async createManyOrders(ordersRequest: OrderRequest[]) {
    const newOrders = ordersRequest.map((order) => {
      const pizza = this.findPizzaByName(order.pizzaName);
      if (pizza) {
        return {
          id: randomUUID(),
          pizza,
          quantity: order.quantity,
        };
      }
    });
    if (newOrders.length !== ordersRequest.length) return 'failed';
    await this.orderRepository.insertMany(newOrders as Order[]);
  }

  getAllOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: string): Order | undefined {
    const order = this.orders.find((order) => order.id === id);
    if (!order) return;
    return order;
  }

  findPizzaByName(pizzaName: string): Pizza | undefined {
    const pizza = this.menu.find((pizza) => pizza.name.toLowerCase() === pizzaName.toLowerCase());
    if (!pizza) return;
    return pizza;
  }
}
