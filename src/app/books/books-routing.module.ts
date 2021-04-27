import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookPageComponent} from './components/book-page/book-page.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: ':productID', component: BookPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
