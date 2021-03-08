import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(books: any, sortParam: string, sortFlag: string): unknown {
    if (!sortParam) {
      return books;
    }
    if (!sortFlag) {
      sortFlag = 'az';
    }
    if (sortFlag === 'az') {
      books.sort((a, b) => (a[sortParam] > b[sortParam]));
      return books;
    } else if (sortFlag === 'za') {
      return books.sort((a, b) => (b[sortParam] > a[sortParam]));
    }
  }
}
