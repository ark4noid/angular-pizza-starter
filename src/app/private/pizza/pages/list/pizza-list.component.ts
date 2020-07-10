import { Component, OnInit } from '@angular/core';
import { PizzaHttpService } from '../../services/pizza-http.service';

@Component({
    selector:'ps-pizza-list',
    templateUrl:'./pizza-list.component.html',
    styleUrls:['./pizza-list.component.css'],
    providers:[PizzaHttpService]
})
export class PizzaListComponent implements OnInit{
    pizzas:any;
    constructor(private pizzaService:PizzaHttpService){
    }
    ngOnInit(){
        this.getPizzas();
    }
    getPizzas(){
        this.pizzaService.getAll().then((pizzas)=>{
            this.pizzas=pizzas;
        })
    }
    getImg(pizza){
        return `http://localhost:3005${pizza.img}`;

    }
   
}