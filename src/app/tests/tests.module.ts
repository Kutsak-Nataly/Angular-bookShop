import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComponent} from './test.component';
import {ZoomDirective} from '../shared/directives/zoom.directive';
import {TestItemComponent} from './test-item.component';
import {ItemChildComponent} from './item-child.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    TestComponent,
    TestItemComponent,
    ItemChildComponent,
    ZoomDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestsModule { }
