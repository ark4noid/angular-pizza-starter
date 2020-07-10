import { Component, OnInit, OnDestroy } from '@angular/core';
import { PizzaHttpService } from '../../services/pizza-http.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ps-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css'],
  providers: [PizzaHttpService]
})
export class PizzaDetailComponent implements OnInit, OnDestroy {
  public pizza: any;
  private sub: Subscription;
  constructor(private pizzaService: PizzaHttpService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.getPizza(params.id);
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  getPizza(id) {
    this.pizzaService.get(id).then((pizza) => {
      this.pizza = pizza;
    });
  }
  getImg(pizza) {
    return `http://localhost:3005${pizza.img}`;
  }

}
