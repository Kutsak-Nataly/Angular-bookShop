import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/BookModel';
import {DataHandlerService} from '../../services/data-handler.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: BookModel[];
  book: BookModel;

  constructor(private dataHandler: DataHandlerService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.books = this.dataHandler.getAllBooks();

  }

  onBuy(book: BookModel): void {
    this.cartService.addToCart(book);
  }

  onOverBuy(): void {
    return;
  }
}
