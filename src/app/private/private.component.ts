import { Component } from '@angular/core';

@Component({
  selector: 'ps-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  opened = false;
  //pruebas
  comments = [
    {text: 'hola', user: { name: 'pepe'}},
    {text: 'adios', user: {name: 'pepe'}},
  ];
  onMenuClick(){
    this.opened = !this.opened;
  }
}
