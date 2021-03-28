import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookModel} from '../../../shared/models/BookModel';
import {BookService} from '../../../shared/services/book.service';
import {CartService} from '../../../shared/services/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: BookModel[];
  sortFlag = 'az';
  sortParam: string;
  private subscription: Subscription;

  constructor(private dataHandler: BookService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.subscription = this.dataHandler.getBooks().subscribe(
      (value: BookModel[]) => this.books = value,
      error => console.log('Error get books from database' + error)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  trackByFn(index, item) {
    return item.id;
  }

  buyBook(book: BookModel): void {
    this.cartService.addBook(book);
  }

}
