import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import {Router} from '@angular/router';
import {BookModel} from '../../../shared/models/BookModel';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  items = [];
  sortFlag = 'az';
  sortParam: string;
  totalCart = {
    sumCart: 0,
    countCart: 0
  };
  private subscription: Subscription;

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.subscription = this.cartService.updateCartData(this.items).subscribe((value => this.totalCart = value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  onClearCart(): void {
    this.items = this.cartService.removeAllBooks();
  }

  orderLink() {
    this.router.navigate(['order']);
  }
}
