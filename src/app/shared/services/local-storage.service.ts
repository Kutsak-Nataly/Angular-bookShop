import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {
  private itemsArray: number[];
  private keyName = 'favorites';

  constructor() {
    this.getlist();
  }

  getlist(): number[] {
    this.itemsArray = localStorage.getItem(this.keyName) ? JSON.parse(localStorage.getItem(this.keyName)) : [];
    return this.itemsArray;
  }

  setItem(idItem) {
    this.itemsArray.push(idItem);
    localStorage.setItem(this.keyName, JSON.stringify(this.itemsArray));
  }

  getItem(idItem): boolean {
    return this.itemsArray.includes(idItem);
  }

  removeItem(idItem) {
    this.itemsArray.splice(this.itemsArray.indexOf(idItem), 1);
    localStorage.setItem(this.keyName, JSON.stringify(this.itemsArray));
  }

  clear(): number[] {
    localStorage.removeItem(this.keyName);
    return this.itemsArray = [];
  }
}
