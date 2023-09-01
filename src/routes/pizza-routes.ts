import { Router } from 'express';
import { makeCreatePizzaController, makeRetrieveAllPizzasController } from '../factories';

export const pizzaRouter = Router();

pizzaRouter.get('/', makeRetrieveAllPizzasController().retrieveAll);
pizzaRouter.post('/', makeCreatePizzaController().create);
