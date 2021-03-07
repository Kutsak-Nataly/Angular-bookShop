import {Pipe, PipeTransform} from '@angular/core';
import {BookModel} from '../models/BookModel';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(books: BookModel[], sortParam: string, sortFlag: string): unknown {
    if (!sortParam) {
      return books;
    }
    if (!sortFlag) {
      sortFlag = 'az';
    }
    if (sortFlag === 'az') {
      return books.sort((a, b) => (a > b ? 1 : -1));
    } else if (sortFlag === 'za') {
      return books.sort((a, b) => (a < b ? 1 : -1));
    }
  }
}
