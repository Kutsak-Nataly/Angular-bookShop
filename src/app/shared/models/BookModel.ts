import {CategoryModel} from './CategoryModel';

export class BookModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: CategoryModel[];
  createDate: Date;
  isAvailable: number;
  counted: number;

  // eslint-disable-next-line max-len
  constructor(id: number, name: string, description: string, price: number, category: CategoryModel[], createDate: Date, isAvailable: number, counted: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createDate = createDate;
    this.isAvailable = isAvailable;
    this.counted = counted;
  }
}
