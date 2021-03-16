import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav-adm',
  templateUrl: './nav-adm.component.html',
  styleUrls: ['./nav-adm.component.scss']
})
export class NavAdmComponent implements OnInit {
  title = 'bookShop';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  adminOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
