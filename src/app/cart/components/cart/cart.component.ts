import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = [];
  totalCart = [0, 0];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.updateCartData(this.items);
  }

  updateCartData(items) {
    this.totalCart = this.cartService.updateCartData(items);
  }

  removeBook(index) {
    return this.cartService.removeBook(index);
  }

  increaseQuantity(index) {
    this.updateCartData(this.items);
    return this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index) {
    return this.cartService.decreaseQuantity(index);
  }

  onClearCart() {
    this.items = this.cartService.removeAllBooks();
  }

}
