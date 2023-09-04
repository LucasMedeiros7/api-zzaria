/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable max-classes-per-file */
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class EntityNotFoundError extends CustomError {
  constructor(entityName: string, entityId: string) {
    const message = `${entityName} with ID ${entityId} not found`;
    super(message);
  }
}

class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

export { CustomError, EntityNotFoundError, BadRequestError };
