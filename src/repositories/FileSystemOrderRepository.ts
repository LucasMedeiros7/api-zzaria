import path from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { OrderRepository } from './OrderRepository';
import { Order } from '../model/Order';

export class FileSystemOrderRepository implements OrderRepository {
  private readonly menuFilePath: string;

  constructor() {
    this.menuFilePath = path.join(__dirname, '../data/orders.json');
  }

  insert(newOrder: Order): Promise<void> {
    const orders = JSON.parse(readFileSync(this.menuFilePath, 'utf-8'));
    orders.push(newOrder);
    return new Promise((rej, res) => {
      writeFileSync(this.menuFilePath, JSON.stringify(orders, null, 2), 'utf-8');
      res();
    });
  }

  insertMany(newOrders: Order[]): Promise<void> {
    const orders = JSON.parse(readFileSync(this.menuFilePath, 'utf-8'));
    orders.push(...newOrders);
    return new Promise((rej, res) => {
      writeFileSync(this.menuFilePath, JSON.stringify(orders, null, 2), 'utf-8');
      res();
    });
  }
}
