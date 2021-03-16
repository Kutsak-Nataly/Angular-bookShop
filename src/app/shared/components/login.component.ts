import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
      <div class="conteiner">
          <div class="col-md-4 offset-md-4" *ngIf="!auth">
              <form novalidate [formGroup]="loginForm" (ngSubmit)="login(loginForm)" #userForm='ngForm'>
                  <div class="form-group">
                      <label for="user">Логин</label>
                      <input type="text" class="form-control" id="user" formControlName="user"/>
                      <div *ngIf="loginForm.get('user').hasError('required') && loginForm.get('user').touched" class="alert-valid"
                      >Обязательное поле
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="password">Пароль</label>
                      <input type="text" class="form-control" id="password" formControlName="password"/>
                      <div *ngIf="loginForm.get('password').hasError('required') && loginForm.get('password').touched" class="alert-valid"
                      >Обязательное поле
                      </div>
                      <div *ngIf="loginForm.get('password').hasError('minlength') && loginForm.get('password').touched" class="alert-valid"
                      >Минимальное количество символов 6
                      </div>
                  </div>
                  <input [disabled]="loginForm.invalid" type="submit" class="btn btn-green" value="Войти">
                  <div *ngIf="noAuthMessage" class="alert-valid">{{noAuthMessage}}</div>
              </form>
          </div>
          <div class="col-md-4 offset-md-4" *ngIf="auth">
              <button (click)="logout()">Выйти</button>
          </div>
      </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  auth: boolean;
  noAuthMessage = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.auth = this.authService.isLoggedIn;
    this.loginForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    this.auth = this.authService.login(this.loginForm.value.user, this.loginForm.value.password);
    if (this.auth) {
      this.router.navigate(['admin']);
      this.noAuthMessage = '';
    } else {
      this.noAuthMessage = 'Логин и пароль введены неверно';
    }
   // return this.auth;
  }

  logout() {
    this.auth = this.authService.logout();
    return this.auth;
  }
}
