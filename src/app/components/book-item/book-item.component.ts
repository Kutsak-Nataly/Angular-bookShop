import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../../models/BookModel';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnInit {
  @Input() book: BookModel;

  @Output() buy = new EventEmitter<BookModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
