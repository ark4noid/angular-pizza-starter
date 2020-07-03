import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ //elemento del modulo
    MenuComponent,
  ],
  imports: [      //material q necesitamos
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule, // para poder usar las directivas routerLink y routerLinkActive
    CommonModule // *ngFor
  ],
  // para poder usarlo desde fuera del modulo
  exports: [
    MenuComponent
  ]
})

export class MenuModule { }
