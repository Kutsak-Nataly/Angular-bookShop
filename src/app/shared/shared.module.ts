import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersModule} from '../orders/orders.module';
import {ActiveItemDirective} from './directives/active-item.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {PageNotFoundComponent} from './page-not-found.component';
import {BookService} from './services/book.service';
import {CartService} from './services/cart.service';

@NgModule({
  declarations: [
    ActiveItemDirective,
    OrderByPipe,
    PageNotFoundComponent
  ],
  imports: [],
  exports: [
    CommonModule,
    OrdersModule,
    ActiveItemDirective,
    OrderByPipe,
  ],
  providers: [
    BookService,
    CartService
  ]
})
export class SharedModule {
}
