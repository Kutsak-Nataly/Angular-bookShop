import {Injectable} from '@angular/core';
import {TestData} from '../shared/data/TestData';
import {BookModel} from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }

  getBooks(): BookModel[] {
    return TestData.books;
  }

}
