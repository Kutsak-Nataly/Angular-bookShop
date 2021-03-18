import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../../../shared/models/BookModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnInit {

  @Input() book: BookModel;

  @Output() buy = new EventEmitter<BookModel>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  bookLink() {
    return this.router.navigate(['product',this.book.idKey]);
  }

}
