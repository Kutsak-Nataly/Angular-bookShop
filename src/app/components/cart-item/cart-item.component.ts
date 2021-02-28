import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../../models/BookModel';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() item: BookModel;
  @Input() i: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  onDeleteBook(i) {
    return this.cartService.deleteBook(i);
  }

  onIncrement(i) {
    return this.cartService.Increment(i);
  }

  onDecrement(i) {
    return this.cartService.Decrement(i);
  }
}
