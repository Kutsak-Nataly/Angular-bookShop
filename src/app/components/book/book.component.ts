import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/BookModel';
import {BookService} from '../../services/book.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: BookModel[];

  constructor(private dataHandler: BookService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.books = this.dataHandler.getBooks();
  }

  onBuy(book: BookModel): void {
    this.cartService.addBook(book);
  }

}
