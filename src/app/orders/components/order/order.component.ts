import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import {Order} from '../../../shared/models/Order';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  message = false;
  order = new Order('', '', '', '', '', []);
  totalCart = {
    sumCart: 0,
    countCart: 0
  };
  private subscription: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.order.cart = this.cartService.getItems();
    this.subscription = this.cartService.updateCartData(this.order.cart).subscribe((value => this.totalCart = value));
    this.order.delivery = 'Получение в пункте доставки';
    this.order.payment = 'Наличный расчет';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.cartService.removeAllBooks();
    this.message = true;
    console.log(this.order);
  }
}
