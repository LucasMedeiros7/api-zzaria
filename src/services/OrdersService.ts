import { Pizza } from "../controllers/PizzasController";

interface Order {
  pizza: Pizza[]
  quantity: number
}

interface OrderRequest {
  pizzaName: string
  quantity: number
}

export class OrdersService {
    constructor(private orders: Order[]) {}

    createNewOrder(order: OrderRequest) {
      console.log('order', order)
    }
}