import { Injectable } from '@angular/core';
import { HTTPService } from '../../core/http/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogoutService extends HTTPService {
  constructor(http: HttpClient) {
    super(http, 'logout');
  }
  logout(){
    return this.http.post(this.resolve(), null).toPromise();
  }
}
