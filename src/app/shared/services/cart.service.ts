import {Injectable} from '@angular/core';
import {BookModel} from '../models/BookModel';
import {Subject} from 'rxjs';

@Injectable()

export class CartService {
  sumCartSub = new Subject<number>();
  countCartSub = new Subject<number>();
  private sumCart = 0;
  private countCart = 0;
  private cart: BookModel[] = [];

  constructor() {
  }

  updateCartData(items) {
    this.sumCart = 0;
    this.countCart = 0;
    items.forEach((item: BookModel) => {
      this.countCart += item.counted;
      this.sumCart += item.counted * item.price;
    });
    this.sumCartSub.next(this.sumCart);
    this.countCartSub.next(this.countCart);
  }

  addBook(item: BookModel): BookModel[] {
    if (this.cart.indexOf(item) !== -1) {
      alert('Данынй товар уже в корзине');
    } else {
      item.counted = 1;
      this.cart.push(item);
      this.updateCartData(this.cart);
      return this.cart;
    }
  }

  getItems(): BookModel[] {
    this.updateCartData(this.cart);
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
