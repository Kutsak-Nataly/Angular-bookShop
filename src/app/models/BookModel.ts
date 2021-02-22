import {CategoryBook} from './CategoryBook';

export class BookModel {
  name: string;
  description: string;
  price: number;
  category: CategoryBook;
  createDate: Date;
  isAvailable: boolean;

  constructor(name: string, description: string, price: number, category: CategoryBook, createDate: Date, isAvailable: boolean) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createDate = createDate;
    this.isAvailable = isAvailable;
  }
}
