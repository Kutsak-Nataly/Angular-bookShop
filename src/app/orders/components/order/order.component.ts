import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import {BookModel} from '../../../shared/models/BookModel';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  items: BookModel[];
  sumCart: number;
  countCart: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartService.updateCartData(this.items);
    this.cartService.sumCartSub.subscribe((sumCart) => this.sumCart = sumCart);
    this.cartService.countCartSub.subscribe((countCart) => this.countCart = countCart);
  }

}
