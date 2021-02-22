import { Injectable } from '@angular/core';
import {TestData} from '../shared/data/TestData';
import {BookModel} from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }
  getAllBooks():BookModel[] {
return TestData.books;
  }

}
