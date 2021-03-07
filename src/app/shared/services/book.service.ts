import {Injectable} from '@angular/core';
import {TestData} from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }

  getBooks() {
    return TestData.books;
  }

}
