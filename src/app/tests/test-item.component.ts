import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-item',
  template: `
      <ng-content></ng-content>
  `,
  styles: ['div {border: 1px solid #8b8b8b;}']
})
export class TestItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
