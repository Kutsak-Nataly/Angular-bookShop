import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-adm',
  templateUrl: './nav-adm.component.html',
  styleUrls: ['./nav-adm.component.scss']
})
export class NavAdmComponent implements OnInit {
  title = 'bookShop';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  adminOut() {
    this.router.navigate(['']);
  }
}
