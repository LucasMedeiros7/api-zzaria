import { Request, Response } from "express";
import { OrdersService } from "../services/OrdersService";

export class OrdersController {
  constructor(private ordersService: OrdersService) { }

  createNewOrder(request: Request, response: Response): Response<void> {
    const { pizza_name, quantity } = request.body
    this.ordersService.createNewOrder({ pizzaName: pizza_name, quantity })
    return response.status(201).json({ message: 'Order created!' })
  }
}