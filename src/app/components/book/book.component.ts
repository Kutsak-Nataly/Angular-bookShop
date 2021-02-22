import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../models/BookModel';
import {TestData} from '../../shared/data/TestData';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  constructor() {

  }
  private books: BookModel[];

  ngOnInit(): void {
   this.books = TestData.books;
  }
  console.log(books);
}
