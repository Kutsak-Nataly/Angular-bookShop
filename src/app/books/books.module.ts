import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookItemComponent} from './components/book-item/book-item.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {BookPageComponent} from './components/book-page/book-page.component';
import {RouterModule} from '@angular/router';
import { MainLayoutComponent } from './components/main-page/main-layout/main-layout.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import {MainPageComponent} from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookPageComponent,
    MainLayoutComponent,
    FavoriteComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ]

})
export class BooksModule {
}
