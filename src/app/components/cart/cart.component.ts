import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {TotalCart} from '../../models/TotalCartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = [];
  totalCart: TotalCart;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  updateCartData(){
    this.totalCart = this.cartService.updateCartData();
    //не работает вывод обновленных данных по корзине общая цена и количество
    console.log(this.totalCart);
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
