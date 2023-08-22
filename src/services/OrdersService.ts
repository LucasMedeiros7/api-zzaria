import path from "path";
import { Pizza } from "../controllers/PizzasController";
import { writeFileSync } from "fs";
import { randomUUID } from "crypto";

export interface Order {
  id: string
  pizza: Pizza
  quantity: number
}

interface OrderRequest {
  pizzaName: string
  quantity: number
}

export class OrdersService {
  private menuFilePath: string

  constructor(private orders: Order[], private menu: Pizza[]) {
    this.menuFilePath = path.join(__dirname, '../data/orders.json')
  }

  createNewOrder(orderRequest: OrderRequest) {
    const pizza = this.findPizzaByName(orderRequest.pizzaName);
    if (!pizza) return 'failed';
    const newOrder = {
      id: randomUUID(),
      pizza,
      quantity: orderRequest.quantity
    }
    this.orders.push(newOrder)
    writeFileSync(this.menuFilePath, JSON.stringify(this.orders, null, 2), 'utf-8')
  }

  createManyOrders(ordersRequest: OrderRequest[]) {
    const newOrders = ordersRequest.map(order => {
      const pizza = this.findPizzaByName(order.pizzaName)
      if (pizza) {
        return {
          id: randomUUID(),
          pizza,
          quantity: order.quantity
        }
      }

    })
    if (newOrders.length !== ordersRequest.length) return 'failed';

    console.log(newOrders);
    
  
  }

  getAllOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: string): Order | undefined {
    const order = this.orders.find(order => order.id === id);
    if (!order) return;
    return order;
  }

  findPizzaByName(pizzaName: string): Pizza | undefined {
    const pizza = this.menu.find(pizza => pizza.name.toLowerCase() === pizzaName.toLowerCase() );
    if (!pizza) return;
    return pizza;
  }
}