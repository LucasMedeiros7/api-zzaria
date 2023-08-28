import { Request, Response, request } from 'express';
import { CreatePizzaUseCase } from '../application/usecases';
import { CreatePizzaSchema } from '../application/dtos';

export class CreatePizzaController {
  constructor(private createPizzaUseCase: CreatePizzaUseCase) { }

  async create(_request: Request, response: Response): Promise<Response> {
    const pizza = CreatePizzaSchema.parse(request.body);
    await this.createPizzaUseCase.execute(pizza);
    return response.json({ message: 'Pizza created!!!' });
  }
}
