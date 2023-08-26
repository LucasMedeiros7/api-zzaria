export class Pizza {
  constructor(
    private name: string,
    private price: number,
    private ingredients: string[],
  ) {
    if (this.price <= 0) throw new Error('Price must be positive');
    this.price = price;
  }

  getValues() {
    return {
      name: this.name,
      price: this.price,
      ingredients: this.ingredients,
    };
  }
}
