import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = [];
  sumCart: number;
  countCart: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartService.sumCartSub.subscribe((sumCart) => this.sumCart = sumCart);
    this.cartService.countCartSub.subscribe((countCart) => this.countCart = countCart);
  }

  removeBook(index) {
    return this.cartService.removeBook(index);
  }

  increaseQuantity(index) {
    return this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index) {
    return this.cartService.decreaseQuantity(index);
  }

  onClearCart() {
    this.items = this.cartService.removeAllBooks();
  }

}
