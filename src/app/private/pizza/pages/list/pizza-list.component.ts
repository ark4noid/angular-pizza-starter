import { Component, OnInit } from '@angular/core';
import { PizzaHttpService } from '../../services/pizza-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ps-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  providers: [PizzaHttpService]
})
export class PizzaListComponent implements OnInit {
  pizzas: any;
  constructor(private pizzaService: PizzaHttpService, private router: Router) {
  }
  ngOnInit() {
    this.getPizzas();
  }
  getPizzas() {
    this.pizzaService.getAll().then((pizzas) => {
      this.pizzas = pizzas;
    })
  }
  getImg(pizza) {
    return `http://localhost:3005${pizza.img}`;
  }
  onClick(pizza){
    this.router.navigateByUrl(`/pizzas/${pizza.id}`);
  }
}
