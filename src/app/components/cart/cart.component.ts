import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = [];

  constructor(private cartServise: CartService) {
    this.items = this.cartServise.getItems();
  }

  ngOnInit(): void {

  }

  clearCart() {
    this.cartServise.clearCart();
  }
}
