import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersModule} from '../orders/orders.module';
import { ActiveItemDirective } from './directives/active-item.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [ActiveItemDirective, OrderByPipe],
  imports: [],
  exports: [
    CommonModule,
    OrdersModule,
    ActiveItemDirective,
    OrderByPipe,
  ],
  providers: []
})
export class SharedModule {
}
