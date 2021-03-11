import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './books/components/book-list/book-list.component';
import {BookPageComponent} from './books/components/book-page/book-page.component';
import {PageNotFoundComponent} from './shared/page-not-found.component';
import {OrderComponent} from './orders/components/order/order.component';
import {CartComponent} from './cart/components/cart/cart.component';
import {TestComponent} from './tests/test.component';
import {AboutComponent} from './core/components/about/about.component';
import {MainPageComponent} from './books/components/main-page/main-page.component';
import {MainLayoutComponent} from './books/components/main-page/main-layout/main-layout.component';
import {AdminRoutingModule} from './admin/admin-routing.module';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'products-list', component: BookListComponent},
      {path: 'product/:productID', component: BookPageComponent},
      {path: 'test', component: TestComponent},
      {path: 'core', component: AboutComponent},
      {path: 'cart', component: CartComponent},
      {path: 'order', component: OrderComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
