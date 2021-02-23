import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/BookModel';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: BookModel[];
  book: BookModel;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.books = this.dataHandler.getAllBooks();

  }

  onBuy(book: BookModel): void {
    console.log(book);

  }

  overBuy(): void {
    return;
  }
}
