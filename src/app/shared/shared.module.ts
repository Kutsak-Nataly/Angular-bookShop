import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersModule} from '../orders/orders.module';
import {ActiveItemDirective} from './directives/active-item.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {PageNotFoundComponent} from './page-not-found.component';
import {BookService} from './services/book.service';
import {CartService} from './services/cart.service';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {NavAdmComponent} from './components/nav-adm/nav-adm.component';

@NgModule({
  declarations: [
    ActiveItemDirective,
    OrderByPipe,
    PageNotFoundComponent,
    NavComponent,
    NavAdmComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    CommonModule,
    OrdersModule,
    ActiveItemDirective,
    OrderByPipe,
    NavComponent,
    NavAdmComponent
  ],
  providers: [
    BookService,
    CartService
  ]
})
export class SharedModule {
}
