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

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    OrdersModule,
    CartModule,
    TestsModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-BY'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
