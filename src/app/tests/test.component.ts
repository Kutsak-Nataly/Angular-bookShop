import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ZoomDirective} from '../shared/directives/zoom.directive';
import {ItemChildComponent} from './item-child.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {
  @ViewChild(ItemChildComponent) private testChild: ItemChildComponent;
  @ViewChild(ZoomDirective) private appZoom: ZoomDirective;
  @ViewChild('pChild') private pChild: ElementRef;
  @ViewChildren('pChildren') private pChildren: QueryList<ElementRef>;

  textInput = '';
  textInput1 = '';
  color = '';
  sizeFont: 0;
  private countChild = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.countChild = this.pChildren.length;
  }

  showBlock() {
    this.testChild.show();
  }

  testViewChild() {
    this.pChild.nativeElement.style.color = '#d71dde';
    this.pChildren.forEach((p, index) => {
      p.nativeElement.style.color = '#04da46';
      ++index;
      p.nativeElement.append(' ' + index);
    });
  }

  onKey($event) {
    this.textInput = $event.target.value;
  }

  onKeyEnter($event) {
    this.textInput1 = $event.target.value;
  }

}
