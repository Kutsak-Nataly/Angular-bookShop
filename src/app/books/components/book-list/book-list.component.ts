import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../../shared/models/BookModel';
import {BookService} from '../../../shared/services/book.service';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: BookModel[];
  sortFlag = 'az';
  sortParam: string;

  constructor(private dataHandler: BookService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.books = this.dataHandler.getBooks();
  }

  trackByFn(index, item) {
    return item.idKey;
  }

  buyBook(book: BookModel): void {
    this.cartService.addBook(book);
  }

}
