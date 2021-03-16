import {BookModel} from './BookModel';

export class Order {
  email: string;
  phone: string;
  delivery: string;
  payment: string;
  dopInfo?: string;
  cart: BookModel[];

  constructor(email: string, phone: string, delivery: string, payment: string, dopInfo: string, cart: BookModel[]) {
    this.email = email;
    this.phone = phone;
    this.delivery = delivery;
    this.payment = payment;
    this.dopInfo = dopInfo;
    this.cart = cart;
  }
}
