import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersModule} from '../orders/orders.module';
import { ActiveItemDirective } from './directives/active-item.directive';

@NgModule({
  declarations: [ActiveItemDirective],
  imports: [],
  exports: [
    CommonModule,
    OrdersModule,
    ActiveItemDirective,
  ],
  providers: []
})
export class SharedModule {
}
