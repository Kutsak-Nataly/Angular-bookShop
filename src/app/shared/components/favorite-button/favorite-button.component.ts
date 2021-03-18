import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() idKey;
  favoriteColor = '#6dac07';
  fillColor: string;
  private flag: boolean;

  constructor(private favoriteLocalStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.flag = this.favoriteLocalStorage.getItem(this.idKey);
    this.fillColor = this.flag ? this.favoriteColor : 'none';
  }

  favoriteIn() {
    this.flag = !this.flag;
    this.fillColor = this.flag ? this.favoriteColor : 'none';
    if (this.flag) {
      this.favoriteLocalStorage.setItem(this.idKey);
    } else {
      this.favoriteLocalStorage.removeItem(this.idKey);
    }
  }
}
