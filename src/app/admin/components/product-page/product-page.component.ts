import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookModel} from '../../../shared/models/BookModel';
import {DateService} from '../../../shared/services/date.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  book: BookModel;
  private id: number;

  constructor(private dataHandler: DateService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params.id;
    this.dataHandler.getBookById(this.id).subscribe((value: BookModel) => this.book = value);
  }

}
