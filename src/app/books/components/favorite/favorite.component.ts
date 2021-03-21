import {Component, DoCheck, OnInit} from '@angular/core';
import {LocalStorageService} from '../../../shared/services/local-storage.service';
import {BookModel} from '../../../shared/models/BookModel';
import {BookService} from '../../../shared/services/book.service';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})

export class FavoriteComponent implements OnInit, DoCheck {
  books: BookModel[];
  private favoritArray: number[];

  constructor(private favoriteLocalStorage: LocalStorageService,
              private dataHandler: BookService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  ngDoCheck(): void {
    this.getBooks();
  }

  getBooks(): BookModel[] {
    this.favoritArray = this.favoriteLocalStorage.getlist();
    if (this.favoritArray) {
      this.books = [];
      this.favoritArray.forEach(
        id => this.books.push(this.dataHandler.getBookById(id))
      );
    }
    return this.books;
  }

  trackByFn(index, item) {
    return item.idKey;
  }

  buyBook(book: BookModel): void {
    this.cartService.addBook(book);
  }

  clear() {
    this.favoriteLocalStorage.clear();
    this.getBooks();
  }

}