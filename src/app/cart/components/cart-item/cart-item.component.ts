import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../../../shared/models/BookModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() item: BookModel;
  @Output() removeBook = new EventEmitter<BookModel>();
  @Output() increaseQuantity = new EventEmitter<BookModel>();
  @Output() decreaseQuantity = new EventEmitter<BookModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
