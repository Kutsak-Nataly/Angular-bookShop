import {CartItemComponent} from './components/cart-item/cart-item.component';
import {AppComponent} from './app.component';
import {CartComponent} from './components/cart/cart.component';
import {registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BookComponent} from './components/book/book.component';
import {BrowserModule} from '@angular/platform-browser';
import localeDECH from '@angular/common/locales/ru-BY';
import { BookItemComponent } from './components/book-item/book-item.component';
import { TestComponent } from './components/test/test.component';
import { ZoomDirective } from './components/test/zoom.directive';
import { TestItemComponent } from './components/test/test-item.component';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    BookItemComponent,
    TestComponent,
    ZoomDirective,
    TestItemComponent
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
