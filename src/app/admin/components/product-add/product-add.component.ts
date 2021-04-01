import {Component, OnDestroy, OnInit} from '@angular/core';
import {DateService} from '../../../shared/services/date.service';
import {BookModel} from '../../../shared/models/BookModel';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../../shared/models/CategoryModel';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnDestroy {
  book: BookModel;
  categories: CategoryModel[];
  editBookForm: FormGroup;


  private subscriptionCategories: Subscription;

  constructor(private dataHandler: DateService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscriptionCategories.unsubscribe();
  }


  getCategories() {
    this.subscriptionCategories = this.dataHandler.getCategories().subscribe(
      (value: CategoryModel[]) => this.categories = value,
      error => console.error('Error get books from database' + error)
    );
  }

  createForm() {
    this.editBookForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('\\d*')]),
      price: new FormControl('', [Validators.required, Validators.pattern('\\d*\\.?\\d{1,2}')]),
      isAvailable: new FormControl('', [Validators.required, Validators.pattern('\\d*')]),
      createDate: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      category: new FormArray([])
    });
     this.addFormArray();
  }

  addFormArray() {
    this.categories.forEach(
      category => {
        const control = new FormControl(category.slug);
       (this.editBookForm.get('category') as FormArray).push(control);
      }
    );
  }

  addBook(book: BookModel) {
    this.dataHandler.addBook(book).subscribe(
      value => console.log('Книга добавлена'),
      error => console.error(error)
    );
  }

  onSubmit() {
    console.log(this.editBookForm.value);
    this.book.id = this.editBookForm.value;
  }
}
