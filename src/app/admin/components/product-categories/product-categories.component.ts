import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryModel} from '../../../shared/models/CategoryModel';
import {Subscription} from 'rxjs';
import {DateService} from '../../../shared/services/date.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit, OnDestroy {
  categories: CategoryModel[];
  category: CategoryModel;
  formAddCategory: FormGroup;
  private subscriptionCategories: Subscription;

  constructor(private dataHandler: DateService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.createFormAddCategory();
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

  deleteCategory(id: number) {
    this.dataHandler.deleteCategory(id).subscribe(
      () => this.categories = this.categories.filter(category => category.id !== id),
      error => console.error(error),
      () => console.log('Завершено удаление')
    );
  }

  addCategory() {
    this.category = {
      id: Number(this.formAddCategory.get('id').value),
      slug: this.formAddCategory.get('slug').value,
      name: this.formAddCategory.get('name').value
    };
    this.dataHandler.addCategory(this.category).subscribe(
      value => this.categories.push(value),
      error => console.error(error),
    () => console.log('Добавлена категория')
    );
    this.formAddCategory.reset();
  }

  private createFormAddCategory() {
    this.formAddCategory = this.fb.group({
      id: new FormControl('', [Validators.required, Validators.pattern('\\d*')]),
      slug: new FormControl('', [Validators.required, Validators.pattern('[0-9a-z_-]*')]),
      name: new FormControl('', [Validators.required, Validators.pattern('[0-9A-Za-zА-Яа-я ]*')])
    });
  }
}
