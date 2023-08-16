import { Request, Response } from "express";

interface Pizza {
  name: string;
  price: number;
  ingredients: string[];
}

export class PizzaController {
  constructor(private pizzaMenu: Pizza[]) { }

  getAllPizzas(_request: Request, response: Response): Response<Pizza[]> {
    return response.json(this.pizzaMenu);
  }
}