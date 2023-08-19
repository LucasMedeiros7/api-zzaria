import { Request, Response } from "express";

export interface Pizza {
  name: string;
  price: number;
  ingredients: string[];
}

export class PizzasController {
  constructor(private menu: Pizza[]) { }

  getAllPizzas(_request: Request, response: Response): Response<Pizza[]> {
    return response.json(this.menu);
  }
}