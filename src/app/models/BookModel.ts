import {CategoryModel} from './CategoryModel';

export class BookModel {
  idKey: number;
  name: string;
  description: string;
  price: number;
  category: CategoryModel;
  createDate: Date;
  isAvailable: number;
  counted: number;

// eslint-disable-next-line max-len
  constructor(idKey: number, name: string, description: string, price: number, category: CategoryModel, createDate: Date, isAvailable: number, counted: number) {
    this.idKey = idKey;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createDate = createDate;
    this.isAvailable = isAvailable;
    this.counted = counted;
  }
}
