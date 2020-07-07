import { Component } from '@angular/core';

@Component({
  selector: 'ps-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  opened = false;
  comments = [
    {score: 7, text: 'Hola', user: {name: 'Belén'}, created: 'Tue, 02 Jun 2020 12:22:48 GMT'},
    {score: 3, text: 'Adios', user: {name: 'Patricia'}, created: 'Tue, 02 Jun 2020 12:22:48 GMT'},
    {score: 10, text: 'Q contentaaaa!', user: {name: 'Yolanda'}, created: 'Tue, 02 Jun 2020 12:22:48 GMT'}

  ];  //imagino que aquí debe recoger todos los datos del array del comment-list
  onMenuClick(){
    this.opened = !this.opened;
  }
}
