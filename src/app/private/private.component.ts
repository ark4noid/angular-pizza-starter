import { Component } from '@angular/core';

@Component({
  selector: 'ps-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  opened = false;
  //pruebas
  comments = [
    {text: 'hola'},
    {text: 'adiós'},
  ];
  onMenuClick(){
    this.opened = !this.opened;
  }
}
