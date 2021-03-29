import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageService} from '../../../shared/services/local-storage.service';
import {BookModel} from '../../../shared/models/BookModel';
import {BookService} from '../../../shared/services/book.service';
import {CartService} from '../../../shared/services/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})

export class FavoriteComponent implements OnInit, OnDestroy {
  books: BookModel[] = [];
  private favoriteArray: number[];
  private subscription: Subscription;

  constructor(private favoriteLocalStorage: LocalStorageService,
              private dataHandler: BookService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
     this.getBooks();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getBooks(): void {
    this.favoriteArray = this.favoriteLocalStorage.getlist();
    if (this.favoriteArray.length > 0) {
      this.subscription = this.dataHandler.getBookByArrayId(this.favoriteArray).subscribe(
        (value: BookModel[]) => this.books = value,
        error => console.log('Error get books from database' + error)
      );
    }
  }

  trackByFn(index, item) {
    return item.id;
  }

  buyBook(book: BookModel): void {
    this.cartService.addBook(book);
  }

  clear() {
    this.favoriteLocalStorage.clear();
    this.books = [];
  }

}
