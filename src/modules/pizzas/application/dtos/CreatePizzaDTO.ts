import { z } from 'zod';

const CreatePizzaSchema = z.object({
  name: z.string(),
  price: z.coerce.number(),
  ingredients: z.array(z.string()),
});

type CreatePizzaDTO = z.infer<typeof CreatePizzaSchema>;

export {
  CreatePizzaSchema,
  CreatePizzaDTO,
};
