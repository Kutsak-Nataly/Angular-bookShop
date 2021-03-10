import {Injectable} from '@angular/core';
import {TestData} from '../data/TestData';
import {BookModel} from '../models/BookModel';

@Injectable()
export class BookService {

  constructor() {
  }

  getBooks(): BookModel[] {
    return TestData.books;
  }

  getBookById(id): BookModel {
    return TestData.books.find(book => book.idKey === id);
  }
}
