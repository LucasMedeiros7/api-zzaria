import { Request, Response } from 'express';
import { DeletePizzaUseCase } from '../application/usecases';

export class DeletePizzaController {
  constructor(private deletePizzaUseCase: DeletePizzaUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { pizzaId } = request.params;
    await this.deletePizzaUseCase.execute(pizzaId);
    return response.status(202).json({ message: `Pizza with id: ${pizzaId} was deleted` });
  }
}
