import {Injectable} from '@angular/core';
import {BookModel} from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BookModel[] = [];

  constructor() {
  }

  addBook(item: BookModel): BookModel[] {
    if (this.cart.indexOf(item) !== -1) {
      alert('Данынй товар уже в корзине');
    } else {
      item.counted = 1;
      this.cart.push(item);
      return this.cart;
    }
  }

  getItems(): BookModel[] {
    return this.cart;
  }

  removeBook(i: number): BookModel[] {
    return this.cart.splice(i, 1);
  }

  removeAllBooks(): BookModel[] {
    return this.cart = [];
  }

  increaseQuantity(i: number): BookModel[] {
    this.cart[i].counted++;
    return this.cart;
  }

  decreaseQuantity(i: number): BookModel[] {
    this.cart[i].counted--;
    if (this.cart[i].counted < 1) {
      alert('Товар будет удален из корзины');
      this.cart.splice(i, 1);
    } else {
      return this.cart;
    }
  }

  updateCartData() {

  }
}
