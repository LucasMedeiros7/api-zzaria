import { Request, Response } from 'express';
import { LoadAllPizzasUseCase } from '../application/usecases';

export class LoadAllPizzasController {
  constructor(private loadPizzasUseCase: LoadAllPizzasUseCase) { }

  async load(_request: Request, response: Response): Promise<Response> {
    const pizzas = await this.loadPizzasUseCase.execute();
    return response.json(pizzas);
  }
}
