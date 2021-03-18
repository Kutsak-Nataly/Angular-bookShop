import {NgModule} from '@angular/core';
import {ActiveItemDirective} from './directives/active-item.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {PageNotFoundComponent} from '../books/components/page-not-found.component';
import {BookService} from './services/book.service';
import {CartService} from './services/cart.service';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {NavAdmComponent} from './components/nav-adm/nav-adm.component';
import {LoginComponent} from './components/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from './services/auth.service';
import {LocalStorageService} from './services/local-storage.service';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';

@NgModule({
  declarations: [
    ActiveItemDirective,
    OrderByPipe,
    PageNotFoundComponent,
    NavComponent,
    NavAdmComponent,
    LoginComponent,
    FavoriteButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ActiveItemDirective,
    OrderByPipe,
    NavComponent,
    NavAdmComponent,
    LoginComponent,
    FavoriteButtonComponent
  ],
  providers: [
    BookService,
    CartService,
    AuthService,
    LocalStorageService
  ]
})
export class SharedModule {
}
