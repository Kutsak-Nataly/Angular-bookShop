import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from './components/book/book.component';
import {BookItemComponent} from './components/book-item/book-item.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    BookComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    BookComponent
  ]

})
export class BooksModule { }
