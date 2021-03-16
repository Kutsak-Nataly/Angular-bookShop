import {Pipe, PipeTransform} from '@angular/core';
import {BookModel} from '../models/BookModel';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(books: any, sortParam: string, sortFlag = 'az'): unknown {
    if (!sortParam) {
      return books;
    }
    if (sortFlag === 'az') {
      books.sort((a, b) => (a[sortParam] > b[sortParam]));
      return books;
    } else if (sortFlag === 'za') {
      return books.sort((a, b) => (b[sortParam] > a[sortParam]));
    }
  }
}
