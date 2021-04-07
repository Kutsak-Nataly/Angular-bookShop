import {Component, OnDestroy, OnInit} from '@angular/core';
import {DateService} from '../../../shared/services/date.service';
import {BookModel} from '../../../shared/models/BookModel';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  books: BookModel[];
  private subscriptionGet: Subscription;

  constructor(private dataHandler: DateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subscriptionGet = this.dataHandler.getBooks().subscribe(
      (value: BookModel[]) => this.books = value,
      error => console.error('Error get books from database' + error)
    );
  }

  ngOnDestroy(): void {
    this.subscriptionGet.unsubscribe();
  }

  trackByFn(index, item) {
    return item.id;
  }

  deleteBook(id: number) {
    this.dataHandler.deleteBook(id).subscribe(
      () => this.books = this.books.filter(book => book.id !== id),
      error => console.error(error)
    );
  }

  editBook(id) {
    return this.router.navigate(['admin', 'product', 'edit', id]);
  }
}
