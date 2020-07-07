import { Component } from '@angular/core';

@Component({
  selector: 'ps-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  opened = false;
  comments = [];  //imagino que aquí debe recoger todos los datos del array del comment-list
  onMenuClick(){
    this.opened = !this.opened;
  }
}
