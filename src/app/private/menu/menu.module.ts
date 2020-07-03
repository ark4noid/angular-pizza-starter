import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [ //elemento del modulo
        MenuComponent,
    ],
    imports: [      //material q necesitamos
        MatSidenavModule,
        MatListModule
    ]
})

export class MenuModule {}