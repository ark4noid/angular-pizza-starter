import { Component, OnInit } from '@angular/core';
import { RefreshService } from './core/auth/refresh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ps-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private refreshService: RefreshService, private router: Router){}
  ngOnInit(){
    this.refreshService.autoLogin()
      .then(() => {this.router.navigateByUrl('/')})
      .catch((err) => {
        console.warn(err);
        this.router.navigateByUrl('/public')
      });
  }
}
