import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import {Order} from '../../../shared/models/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  message = false;
  order = new Order('', '', '', '', '', []);
  totalCart = {
    sumCart: 0,
    countCart: 0
  };
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.order.cart = this.cartService.getItems();
    this.cartService.updateCartData(this.order.cart).subscribe((value => this.totalCart = value));
    this.cartService.updateCartData(this.order.cart);
    this.order.delivery = 'Получение в пункте доставки';
    this.order.payment = 'Наличный расчет';
  }

  onSubmit() {
    this.cartService.removeAllBooks();
    this.message = true;
    console.log(this.order);
  }
}
