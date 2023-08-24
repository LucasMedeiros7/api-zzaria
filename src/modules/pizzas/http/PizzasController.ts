import { Request, Response } from 'express';
import { Pizza } from '../domain';

export class PizzasController {
  constructor(private menu: Pizza[]) { }

  getAllPizzas(_request: Request, response: Response): Response<Pizza[]> {
    return response.json(this.menu);
  }
}
