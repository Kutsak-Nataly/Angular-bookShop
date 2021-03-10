import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localeDECH from '@angular/common/locales/ru-BY';
import {BooksModule} from './books/books.module';
import {TestsModule} from './tests/tests.module';
import {OrdersModule} from './orders/orders.module';
import {CartModule} from './cart/cart.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {ProductsComponent} from './admin/components/products/products.component';
import {ProductAddComponent} from './admin/components/product-add/product-add.component';
import {ProductPageComponent} from './admin/components/product-page/product-page.component';
import {CoreModule} from './core/core.module';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    OrdersModule,
    CartModule,
    TestsModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-BY'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
