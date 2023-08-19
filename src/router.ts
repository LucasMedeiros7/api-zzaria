import { Application, Request, Response } from "express";
import { PizzasController } from "./controllers/PizzasController";
import { OrdersController } from "./controllers/OrdersController";
import { OrdersService } from "./services/OrdersService";

import Menu from './data/pizzas.json'
import Orders from './data/orders.json'


export const registerRoutes = (app: Application) => {
  const pizzaController = new PizzasController(Menu);
  const ordersService = new OrdersService(Orders)
  const ordersController = new OrdersController(ordersService)

  app.get('/pizzas', (req: Request, res: Response) => {
    pizzaController.getAllPizzas(req, res);
  });

  app.post('/pizzas', (req: Request, res: Response) => {
    ordersController.createNewOrder(req, res)
  })
}
