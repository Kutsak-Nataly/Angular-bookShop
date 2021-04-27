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

@NgModule({
  declarations: [
    ActiveItemDirective,
    OrderByPipe,
    PageNotFoundComponent,
    NavComponent,
    NavAdmComponent,
    LoginComponent
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
    LoginComponent
  ],
  providers: [
    BookService,
    CartService,
    AuthService
  ]
})
export class SharedModule {
}
