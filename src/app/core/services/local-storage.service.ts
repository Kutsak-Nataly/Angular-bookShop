import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  setItem(key, value) {
    return;
  }

  getItem(key) {
    return 'проверка связи:' + key;
  }

  removeItem(key) {
    return;
  }
  clear(){
    return;
  }
  //получить ключ на заданной позиции
  key(index) {
    return;
  }
}
