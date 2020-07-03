// supongo que tendré que incluir la rutas q han de llevar los links
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [
  {path: '', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }