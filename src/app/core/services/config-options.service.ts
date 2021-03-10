import {Injectable} from '@angular/core';
import {UserModel} from '../../admin/models/userModel';

@Injectable()
export class ConfigOptionsService {
  user: UserModel;

  constructor() {
  }

  addUser(user: UserModel) {
    return;
  }

  getUser(id: number): UserModel {
    return;
  }

  setUser(key, valuy): UserModel {
    return;
  }
}
