import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './books/components/book/book.component';
import {BookPageComponent} from './books/components/book-page/book-page.component';
import {PageNotFoundComponent} from './shared/page-not-found.component';
import {OrderComponent} from './orders/components/order/order.component';
import {CartComponent} from './cart/components/cart/cart.component';
import {TestComponent} from './tests/test.component';
import {AboutComponent} from './core/components/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'products-list', pathMatch: 'full'},
  {path: 'products-list', component: BookComponent},
  {path: 'product/:productID', component: BookPageComponent},
  {path: 'test', component: TestComponent},
  {path: 'core', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
