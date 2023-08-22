import path from "path";
import { Pizza } from "../controllers/PizzasController";
import { writeFileSync } from "fs";
import { randomUUID } from "crypto";

interface Order {
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

  createNewOrder(order: OrderRequest) {
    const pizza = this.findPizzaByName(order.pizzaName);
    if (!pizza) return 'failed';
    const newOrder = {
      id: randomUUID(),
      pizza,
      quantity: order.quantity
    }
    this.orders.push(newOrder)
    writeFileSync(this.menuFilePath, JSON.stringify(this.orders, null, 2), 'utf-8')
  }

  findPizzaByName(pizzaName: string): Pizza | undefined {
    const pizza = this.menu.find(pizza => pizza.name === pizzaName);
    if (!pizza) return;
    return pizza;
  }
}