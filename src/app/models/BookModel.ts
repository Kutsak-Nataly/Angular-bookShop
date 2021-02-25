import {CategoryModel} from './CategoryModel';

export class BookModel {
  idbook: number;
  name: string;
  description: string;
  price: number;
  category: CategoryModel;
  createDate: Date;
  isAvailable: boolean;


  constructor(name: string, description: string, price: number, category: CategoryModel, createDate: Date, isAvailable: boolean) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createDate = createDate;
    this.isAvailable = isAvailable;
  }
}
