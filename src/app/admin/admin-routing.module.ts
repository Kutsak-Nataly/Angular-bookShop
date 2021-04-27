import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './components/orders/orders.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {AdminLayoutComponent} from './components/admin/admin-layout/admin-layout.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminGuard} from './guards/admin.guard';
import {ProductCategoriesComponent} from './components/product-categories/product-categories.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [AdminGuard], children: [
      {path: '', redirectTo: 'admin', pathMatch: 'full'},
      {path: '', component: AdminComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'product/add', component: ProductAddComponent},
      {path: 'product/edit/:id', component: ProductPageComponent},
      {path: 'product/categories', component: ProductCategoriesComponent},
      {path: 'orders', component: OrdersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
