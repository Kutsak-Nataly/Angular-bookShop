import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {
  @ViewChild('TestItemComponent') testItem: ElementRef;
  textInput = '';
  textInput1 = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  onKey($event) {
    this.textInput = $event.target.value;
  }

  onKeyEnter($event) {
    this.textInput1 = $event.target.value;
  }

  testViewChild() {
   // this.testItem.nativeElement.textContent = 'hell';
    console.log(this.testItem.nativeElement);
  }
}
