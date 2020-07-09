// modulo de rutas que cargue el componente en el path ''
// componente pizza-list
// utilizar el pizza-http.service para pedir todas las pizzas cuando se pinte
// el componente (ngOnInit)
// con un *ngFor tendras que pintar una card con la foto y el nombre de la pizza (img, name)

import { NgModule } from '@angular/core';
import { PizzaListRoutingModule } from './pizza-list.routing';
import { PizzaListComponent } from './pizza-list.component';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';



// cuando se pinche en una card tendrás que navegar a /pizzas/:id

@NgModule({
    declarations: [PizzaListComponent],
    imports: [
        PizzaListRoutingModule,
        CommonModule,
        MatCardModule,

    ]
})

export class PizzaListModule {

}