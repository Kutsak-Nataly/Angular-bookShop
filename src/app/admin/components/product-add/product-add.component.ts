import {Component, OnInit} from '@angular/core';
import {DateService} from '../../../shared/services/date.service';
import {BookModel} from '../../../shared/models/BookModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../../shared/models/CategoryModel';
import {checkBoxValidator} from '../../validators/checkboxValidator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  book: BookModel;
  message = '';
  editBookForm: FormGroup;
  categories: CategoryModel[];

  constructor(private dataHandler: DateService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
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
    this.postBook(this.book);
  }

  bookLink() {
    return this.router.navigate(['product', this.book.id]);
  }

  get categoriesFormGroup() {
    return this.editBookForm.get('categories') as FormGroup;
  }

  private postBook(book: BookModel) {
    this.dataHandler.postBook(book).subscribe(
      () => this.message = 'добавлена в каталог',
      error => console.error(error)
    );
    this.editBookForm.reset();
  }

  private getCategories() {
    this.dataHandler.getCategories().subscribe(
      (value: CategoryModel[]) => {
        this.categories = value;
        this.createForm();
      },
      error => console.error('Error get books from database' + error)
    );
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

}
