import {Component, OnDestroy, OnInit} from '@angular/core';
import {DateService} from '../../../shared/services/date.service';
import {BookModel} from '../../../shared/models/BookModel';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../../shared/models/CategoryModel';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnDestroy {
  book: BookModel;
  // categories: CategoryModel[];
  editBookForm: FormGroup;
  categories: CategoryModel[] = [
    {
      id: 1,
      slug: 'det',
      name: 'Детектив'
    },
    {
      id: 2,
      slug: 'roman',
      name: 'Роман'
    },
    {
      id: 3,
      slug: 'poez',
      name: 'Поэзия'
    },
    {
      id: 4,
      slug: 'hand',
      name: 'Рукоделие'
    },
    {
      id: 5,
      slug: 'child',
      name: 'Детская литература'
    },
    {
      id: 6,
      slug: 'history',
      name: 'История'
    },
    {
      id: 7,
      slug: 'fantasy',
      name: 'Фантастика'
    },
    {
      id: 8,
      slug: 'other',
      name: 'Прочее'
    }
  ];
  private subscriptionCategories: Subscription;


  constructor(private dataHandler: DateService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // this.getCategories();
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

  addBook(book: BookModel) {
    this.dataHandler.addBook(book).subscribe(
      value => console.log('Книга добавлена'),
      error => console.error(error)
    );
  }

  onSubmit() {
    this.book.id = this.editBookForm.value;
  }

  get categoriesFormArray(): FormArray {
    return this.editBookForm.get('categories') as FormArray;
  }

  private createForm() {
    this.editBookForm = this.fb.group({
      id: new FormControl('', [Validators.required, Validators.pattern('\\d*')]),
      price: new FormControl('', [Validators.required, Validators.pattern('\\d*\\.?\\d{1,2}')]),
      isAvailable: new FormControl('', [Validators.required, Validators.pattern('\\d*')]),
      createDate: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      categories: this.fb.array([])
    });
    this.categories.map(
      category => this.categoriesFormArray.push(new FormControl(category.slug))
    );


  }
}
