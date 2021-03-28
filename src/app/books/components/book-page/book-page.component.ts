import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import {BookService} from '../../../shared/services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookModel} from '../../../shared/models/BookModel';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  book: BookModel;
  private id: number;

  constructor(private cartService: CartService,
              private dataHandler: BookService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.activateRouter.snapshot.params.productID;
    this.dataHandler.getBookById(this.id).subscribe((value: BookModel) => this.book = value);
    console.log(this.book);
  }

  buyBook(): void {
    this.cartService.addBook(this.book);
  }

  bookLink() {
    return this.router.navigate(['../'], {relativeTo: this.activateRouter, fragment: 'book' + this.book.id});
  }
}
