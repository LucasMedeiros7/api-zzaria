import { Request, Response } from "express";
import { Order, OrdersService } from "../services/OrdersService";

export class OrdersController {
  constructor(private ordersService: OrdersService) { }

  createNewOrder(request: Request, response: Response): Response<void> {
    const order = request.body    
    if (Array.isArray(order)) {
      if (this.ordersService.createManyOrders(order)) {
        return response.status(404).json({ message: 'Pizza not found!' })
      }
    }
    if (this.ordersService.createNewOrder({ pizzaName: order.pizzaName, quantity: order.quantity })) {
      return response.status(404).json({ message: 'Pizza not found!' })
    }
    return response.status(201).json({ message: 'Order created!' })
  }

  getAllOrders(request: Request, response: Response): Response<Order[]> {
    return response.json(this.ordersService.getAllOrders());
  }

  getOrderById(request: Request, response: Response): Response<Order> {
    const { id } = request.params
    const order = this.ordersService.getOrderById(id)
    if (!order) {
      return response.status(404).json({ message: 'Order not found!' })
    }
    return response.json(order)
  }
}