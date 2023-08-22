import { Request, Response } from "express";
import { Order, OrdersService } from "../services/OrdersService";

export class OrdersController {
  constructor(private ordersService: OrdersService) { }

  createNewOrder(request: Request, response: Response): Response<void> {
    const { pizza_name, quantity } = request.body
    if (this.ordersService.createNewOrder({ pizzaName: pizza_name, quantity })) {
      return response.status(404).json({ message: 'Pizza not found!' })
    }
    return response.status(201).json({ message: 'Order created!' })
  }

  getAllOrders(request: Request, response: Response): Response<Order> {
    return response.json(this.ordersService.getAllOrders());
  }
}