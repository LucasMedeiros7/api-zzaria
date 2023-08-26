/* eslint-disable no-underscore-dangle */
export class Pizza {
  private _name: string;

  private _price: number;

  private _ingredients: string[];

  constructor(name: string, price: number, ingredients: string[]) {
    if (price <= 0) {
      throw new Error('Price must be positive');
    }
    this._name = name;
    this._price = price;
    this._ingredients = ingredients;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    if (price <= 0) {
      throw new Error('Price must be positive');
    }
    this._price = price;
  }

  get ingredients(): string[] {
    return this._ingredients;
  }

  set ingredients(ingredients: string[]) {
    this._ingredients = ingredients;
  }
}
