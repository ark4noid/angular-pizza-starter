import { Component } from '@angular/core';

@Component({
  selector: 'ps-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  opened = false;
  // para hacer pruebas
  comments = [
    {text: 'Hola', user: {name: 'pepe'}},
    {text: 'Adios',  user: {name: 'pepe'}},
  ];
  onMenuClick(){
    this.opened = !this.opened;
  }
}
