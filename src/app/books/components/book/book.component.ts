import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../../shared/models/BookModel';
import {BookService} from '../../../shared/services/book.service';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: BookModel[];
  sortFlag: string;
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
