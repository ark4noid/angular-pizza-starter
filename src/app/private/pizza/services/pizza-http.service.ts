// hacer el metodo que permita recuperar todas las pizzas
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PizzaHttpService extends HTTPService {
    constructor(http: HttpClient) {
        super(http, 'pizzas');
    }
    getAll() {
        return this.http.get(this.resolve()).toPromise()
    }
    get(id){
      return this.http.get(this.resolve(id), {
        params: {
          include: ['comments', 'comments.user', 'ingredients'].join(',')
        }
      }).toPromise();
    }
}

