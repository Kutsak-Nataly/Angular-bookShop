import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-item',
  template: `
      <ng-content></ng-content>
  `,
  styles: []
})
export class TestItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
