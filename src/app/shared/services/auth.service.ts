import {Injectable} from '@angular/core';
import {DateService} from './date.service';
import {UserModel} from '../models/UserModel';

@Injectable()
export class AuthService {
  isLoggedIn = true;
  // isLoggedIn = false;
  user: UserModel;

  constructor(private dataHandler: DateService) {
  }

  login(name: string, password: string): boolean {
    this.user = this.dataHandler.getUser(name, password);
    if (name === 'admin' && password === '1234567') {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
  }

  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
