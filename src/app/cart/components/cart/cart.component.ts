import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import {Router} from '@angular/router';
import {BookModel} from '../../../shared/models/BookModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = [];
  totalCart = {};
  sortFlag: string;
  sortParam: string;

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalCart = this.cartService.updateCartData(this.items).subscribe();
    console.log(this.totalCart);
  }

  removeBook(item: BookModel): BookModel[] {
    return this.cartService.removeBook(item);
  }

  increaseQuantity(item: BookModel): BookModel[] {
    return this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: BookModel): BookModel[] {
    return this.cartService.decreaseQuantity(item);
  }

  onClearCart() {
    this.items = this.cartService.removeAllBooks();
  }

  orderLink() {
    this.router.navigate(['order']);
  }
}
