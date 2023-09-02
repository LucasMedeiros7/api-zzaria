import { Request, Response } from 'express';
import { RetrieveAllPizzasUseCase } from '../application/usecases';

export class RetrieveAllPizzasController {
  constructor(private retrieveAllPizzasUseCase: RetrieveAllPizzasUseCase) { }

  async handle(_request: Request, response: Response): Promise<Response> {
    const pizzas = await this.retrieveAllPizzasUseCase.execute();
    return response.json(pizzas);
  }
}
