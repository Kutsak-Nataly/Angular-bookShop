import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BookModel} from '../models/BookModel';
import {Observable} from 'rxjs';
import {UserModel} from '../models/UserModel';
import {CategoryModel} from '../models/CategoryModel';

@Injectable()
export class DateService {
  private urlBook = 'http://localhost:3000/books';
  private urlUser = 'http://localhost:3000/users';
  private urlCategory = 'http://localhost:3000/categories';
  private user: UserModel;

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.urlBook);
  }

  getBookById(id: number): Observable<BookModel> {
    return this.http.get<BookModel>(this.urlBook + '/' + id);
  }

  getBookByArrayId(ids: number[]): Observable<BookModel[]> {
    const paramsId = new HttpParams().appendAll({id: ids.map(id => String(id))});
    return this.http.get<BookModel[]>(this.urlBook, {params: paramsId});
  }

  deleteBook(id: number): Observable<BookModel> {
    return this.http.delete<BookModel>(this.urlBook + '/' + id);
  }

 postBook(book: BookModel): Observable<BookModel> {
    return this.http.post<BookModel>(this.urlBook, book);
  }

  putBook(book: BookModel): Observable<BookModel> {
    return this.http.put<BookModel>(this.urlBook+ '/' + book.id, book);
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.urlCategory);
  }

  deleteCategory(id: number): Observable<CategoryModel> {
    return this.http.delete<CategoryModel>(this.urlCategory + '/' + id);
  }

  addCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.urlCategory, category);
  }

  getUser(name: string, password: string): UserModel {
    // не работает
    const paramsUser = new HttpParams()
      .append('name', name)
      .append('pass', password);
    this.http.get<UserModel>(this.urlUser, {params: paramsUser}).toPromise().then(
      value => this.user = value,
      error => console.error(`Error database request Users: ${error}`)
    );
    console.log(this.user);
    return this.user;
  }


}
