import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
@Injectable()
export class RefreshService extends HTTPService {
  constructor(http: HttpClient) {
    super(http, 'refresh');
  }
  refresh() {
    return this.http.post(this.resolve(), null, {
      withCredentials: true
    });
  }
}
