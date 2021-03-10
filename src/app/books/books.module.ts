import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './components/book/book.component';
import {BookItemComponent} from './components/book-item/book-item.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {BookPageComponent} from './components/book-page/book-page.component';


@NgModule({
  declarations: [
    BookComponent,
    BookItemComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    BookComponent,
    BookItemComponent
  ]

})
export class BooksModule {
}
