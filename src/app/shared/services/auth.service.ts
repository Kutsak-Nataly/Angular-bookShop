import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  constructor() {
  }

  login(user, password) {
    if (user === 'admin' && password === '1234567') {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
  }

  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }


}
