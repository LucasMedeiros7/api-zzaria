import { PrismaClient } from '@prisma/client';
import { EntityNotFoundError } from '../errors/CustomErrors';

export class GenericPrismaRepository<T> {
  private prisma: PrismaClient;

  /*
   * TODO
   * Temporary any due to limitations in Prisma typings
   * it's still very hacky at the moment
   * https://github.com/prisma/prisma/discussions/3929
   * https://github.com/prisma/prisma/issues/5273
  */
  private modelName: any;

  constructor(modelName: any) {
    this.prisma = new PrismaClient();
    this.modelName = modelName;
  }

  async create(data: T): Promise<T> {
    try {
      const createdItem = await this.prisma[this.modelName].create({
        data,
      });
      return createdItem as T;
    } catch (error: any) {
      throw new Error(`Failed to create ${this.modelName}: ${error.message}`);
    }
  }

  async findById(id: string): Promise<T | null> {
    try {
      const item = await this.prisma[this.modelName].findUnique({
        where: { id },
      });
      if (!item) {
        throw new EntityNotFoundError(this.modelName, id);
      }
      return item as T;
    } catch (error: any) {
      throw new Error(`Failed to find ${this.modelName}: ${error.message}`);
    }
  }

  async findAll(): Promise<T[]> {
    try {
      const items = await this.prisma[this.modelName].findMany();
      return items as T[];
    } catch (error: any) {
      throw new Error(`Failed to fetch ${this.modelName}s: ${error.message}`);
    }
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    try {
      const updatedItem = await this.prisma[this.modelName].update({
        where: { id },
        data,
      });
      return updatedItem as T;
    } catch (error: any) {
      throw new Error(`Failed to update ${this.modelName}: ${error.message}`);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma[this.modelName].delete({
        where: { id },
      });
    } catch (error: any) {
      throw new Error(`Failed to delete ${this.modelName}: ${error.message}`);
    }
  }
}
