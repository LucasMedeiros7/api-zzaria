import { Application, Request, Response } from "express";
import { PizzaController } from "./controllers/PizzaController";

import PizzasMenu from './data/pizzas.json'

export const registerRoutes = (app: Application) => {
  const pizzaController = new PizzaController(PizzasMenu);

  app.get('/pizzas', (req: Request, res: Response) => {
    pizzaController.getAllPizzas(req, res);
  });
}
