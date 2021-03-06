import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from './components/book/book.component';
import {BookItemComponent} from './components/book-item/book-item.component';



@NgModule({
  declarations: [
    BookComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookComponent
  ]

})
export class BooksModule { }
