import { Request, Response } from 'express';
import { CreatePizzaUseCase, RetrieveAllPizzasUseCase } from '../modules/pizzas/application/usecases';
import { FakePizzaRepository } from '../modules/pizzas/application/repositories';
import { CreatePizzaController } from '../modules/pizzas/http/CreatePizzaController';
import { RetrieveAllPizzasController } from '../modules/pizzas/http/RetrieveAllPizzasController';

const makeCreatePizzaController = (request: Request, response: Response) => {
  const pizzaRepository = new FakePizzaRepository();
  const createPizzaUseCase = new CreatePizzaUseCase(pizzaRepository);
  const createPizzaController = new CreatePizzaController(createPizzaUseCase);
  return createPizzaController.handle(request, response);
};

const makeRetrieveAllPizzasController = (request: Request, response: Response) => {
  const pizzaRepository = new FakePizzaRepository();
  const retrieveAllPizzasUseCase = new RetrieveAllPizzasUseCase(pizzaRepository);
  const retrieveAllPizzasController = new RetrieveAllPizzasController(retrieveAllPizzasUseCase);
  return retrieveAllPizzasController.handle(request, response);
};

export {
  makeCreatePizzaController,
  makeRetrieveAllPizzasController,
};
