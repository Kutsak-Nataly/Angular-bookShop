import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../../models/BookModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() item: BookModel;

  constructor() {
  }

  ngOnInit(): void {
  }
  onDeleatebook(item){
    this.item = item;

  }
}
