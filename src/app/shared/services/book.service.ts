import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookModel} from '../models/BookModel';
import {Observable} from 'rxjs';

@Injectable()
export class BookService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${this.url}/books`);
  }

  getBookById(id: number): Observable<BookModel> {
    return this.http.get<BookModel>(`${this.url}/books/${id}`);
  }

  getBookByArrayId(ids: number[]): Observable<BookModel[]> {
    let str = '?';
    ids.forEach(id => str = `${str}id=${id}&`);
    str = str.slice(0, -1);
    return this.http.get<BookModel[]>(`${this.url}/books${str}`);
  }
}
