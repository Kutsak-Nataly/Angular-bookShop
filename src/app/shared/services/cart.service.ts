import {Injectable} from '@angular/core';
import {BookModel} from '../models/BookModel';
import {of} from 'rxjs';

@Injectable()

export class CartService {
  private totalCart = {sumCart: 0, countCart: 0};
  private cart: BookModel[] = [];

  constructor() {
  }

  updateCartData(items) {
    this.totalCart.sumCart = 0;
    this.totalCart.countCart = 0;
    items.forEach((item: BookModel) => {
      this.totalCart.countCart += item.counted;
      this.totalCart.sumCart += item.counted * item.price;
    });
    return of(this.totalCart);
  }

  addBook(item: BookModel): BookModel[] {
    if (this.cart.includes(item)) {
      alert('Данынй товар уже в корзине');
    } else {
      item.counted = 1;
      this.cart.push(item);
      this.updateCartData(this.cart);
      return this.cart;
    }
  }

  getItems(): BookModel[] {
    return this.cart;
  }

  removeBook(item: BookModel): BookModel[] {
    this.cart.splice(this.cart.indexOf(item), 1);
    this.updateCartData(this.cart);
    return this.cart;
  }

  removeAllBooks(): BookModel[] {
    return this.cart = [];
  }

  increaseQuantity(item: BookModel): BookModel[] {
    const i = this.cart.indexOf(item);
    this.cart[i].counted++;
    if (this.cart[i].counted > this.cart[i].isAvailable) {
      alert('Для заказа доступно только ' + this.cart[i].isAvailable + ' книг');
      this.cart[i].counted--;
      return;
    } else {
      this.updateCartData(this.cart);
      return this.cart;
    }
  }

  decreaseQuantity(item: BookModel): BookModel[] {
    const i = this.cart.indexOf(item);
    this.cart[i].counted--;
    if (this.cart[i].counted < 1) {
      alert('Товар будет удален из корзины');
      this.cart.splice(i, 1);
    }
    this.updateCartData(this.cart);
    return this.cart;
  }
}
