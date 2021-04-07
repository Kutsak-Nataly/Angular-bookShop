export class BookModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string[];
  createDate: Date;
  isAvailable: number;
  counted: number;

  constructor(id: number, name: string, description: string, price: number, category: string[], createDate: Date, isAvailable: number, counted: number) {
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
