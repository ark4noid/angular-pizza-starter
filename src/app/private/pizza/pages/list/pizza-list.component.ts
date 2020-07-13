import { Component, OnInit, Inject } from '@angular/core';
import { PizzaHttpService } from '../../services/pizza-http.service';
import { Router } from '@angular/router';
import { environment, ENVIRONMENT } from 'src/app/core/env/env.provider';

@Component({
  selector: 'ps-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  providers: [PizzaHttpService]
})
export class PizzaListComponent implements OnInit {
  pizzas: any;
  constructor(
    private pizzaService: PizzaHttpService,
    private router: Router,
    @Inject(ENVIRONMENT) private env: environment
  ) {
  }
  ngOnInit() {
    this.getPizzas();
  }
  getPizzas() {
    this.pizzaService.getAll().then((pizzas) => {
      this.pizzas = pizzas;
    });
  }
  getImg(pizza) {
    return `${this.env.serverURL}${pizza.img}`;
  }
  onClick(pizza){
    this.router.navigateByUrl(`/pizzas/${pizza.id}`);
  }
}
