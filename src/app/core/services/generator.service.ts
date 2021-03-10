import {Injectable} from '@angular/core';

@Injectable()
export class GeneratorService {
  constructor(private num: number) {
  }

  stringGenerate(num) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}
