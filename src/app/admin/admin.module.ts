import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {OrdersComponent} from './components/orders/orders.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductsComponent} from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ProductAddComponent,
    ProductsComponent,
    AdminComponent,
    ProductPageComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [

  ]
})
export class AdminModule { }
