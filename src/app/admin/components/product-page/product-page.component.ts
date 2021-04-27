import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookModel} from '../../../shared/models/BookModel';
import {DateService} from '../../../shared/services/date.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../../shared/models/CategoryModel';
import {checkBoxValidator} from '../../validators/checkboxValidator';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  book: BookModel;
  message = '';
  editBookForm: FormGroup;
  categories: CategoryModel[];
  private id: number;

  constructor(private dataHandler: DateService,
              private activateRouter: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params.id;
    this.getCategories();
  }

  onSubmit() {
    const categoriesChecked: string[] = [];
    const controlsArray: string[] = Object.keys(this.categoriesFormGroup.controls);
    controlsArray.map(key => {
      const control = this.categoriesFormGroup.controls[key];
      if (control.value === true) {
        categoriesChecked.push(key);
      }
    });

    this.book = {
      id: Number(this.editBookForm.get('id').value),
      name: this.editBookForm.get('name').value,
      description: this.editBookForm.get('description').value,
      price: Number(this.editBookForm.get('price').value),
      category: categoriesChecked,
      createDate: this.editBookForm.get('createDate').value,
      isAvailable: Number(this.editBookForm.get('isAvailable').value),
      counted: 0,
    };
    this.putBook(this.book);
  }

  private putBook(book: BookModel) {
    this.dataHandler.putBook(book).subscribe(
      () => this.message = '- данные сохранены',
      error => console.error(error)
    );
  }

  get categoriesFormGroup() {
    return this.editBookForm.get('categories') as FormGroup;
  }

  private getCategories() {
    this.dataHandler.getCategories().subscribe(
      (value: CategoryModel[]) => {
        this.categories = value;
        this.createForm();
        this.dataHandler.getBookById(this.id).subscribe((book: BookModel) => {
          this.book = book;
          this.patchForm();
        });
      });
  }

  private createForm() {
    this.editBookForm = this.fb.group({
      id: new FormControl('', [Validators.required, Validators.pattern('\\d*')]),
      price: new FormControl('', [Validators.required, Validators.pattern('\\d*\\.?\\d{1,2}')]),
      isAvailable: new FormControl('', [Validators.required, Validators.pattern('\\d*')]),
      createDate: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      categories: this.fb.group({}, {validators: checkBoxValidator})
    });
    this.categories.map(
      category => {
        const middleName = new FormControl(false, Validators.required);
        this.categoriesFormGroup.addControl(category.slug, middleName);
      }
    );
  }

  private patchForm() {
    const tempObj = {
      id: this.book.id,
      price: this.book.price,
      isAvailable: this.book.isAvailable,
      createDate: this.book.createDate,
      name: this.book.name,
      description: this.book.description
    };
    this.editBookForm.patchValue(tempObj);
    this.book.category.map(v => this.editBookForm.get('categories').patchValue({[v]: true}));
  }

}
