import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';
import {BookService} from '../../../shared/services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  book: any;
  id: number;

  constructor(private cartService: CartService,
              private dataHandler: BookService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.activateRouter.snapshot.params.productID;
    this.book = this.dataHandler.getBookById(this.id);
    console.log(this.id);
  }

  buyBook(): void {
    this.cartService.addBook(this.book);
  }
  bookLink() {
    return this.router.navigate(['products-list']);
  }
}
