import { Application, Request, Response } from "express";
import { PizzasController } from "./controllers/PizzasController";
import { OrdersController } from "./controllers/OrdersController";
import { OrdersService } from "./services/OrdersService";

import menu from './data/pizzas.json'
import orders from './data/orders.json'

const registerRoutes = (app: Application) => {
  const pizzaController = new PizzasController(menu);
  const ordersService = new OrdersService(orders, menu)
  const ordersController = new OrdersController(ordersService)

  app.get('/pizzas', (req: Request, res: Response) => {
    pizzaController.getAllPizzas(req, res);
  });

  app.post('/pizzas', (req: Request, res: Response) => {
    ordersController.createNewOrder(req, res)
  })
}


export const router = {
  registerRoutes
}