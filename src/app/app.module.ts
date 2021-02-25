import {CartItemComponent} from './components/cart-item/cart-item.component';
import {AppComponent} from './app.component';
import {CartComponent} from './components/cart/cart.component';
import {registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BookComponent} from './components/book/book.component';
import {BrowserModule} from '@angular/platform-browser';
import localeDECH from '@angular/common/locales/ru-BY';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-BY'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
