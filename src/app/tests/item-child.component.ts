import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-child',
  template: `
      <p>
          Внимание-> {{text1}}
      </p>
  `,
  styles: []
})
export class ItemChildComponent implements OnInit {
  text1: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  show() {
    this.text1 = 'Вот и заработало! Урааа!!!';
  }

}
