import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [OrderComponent]
})
export class OrdersModule { }
