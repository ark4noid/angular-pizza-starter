import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'ps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() menuCLick = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.menuCLick.emit(agreed);
    this.didVote = true;
  }

  }


  // Lanzar un evento de nombre menuClick cuando se pinche en el icono de menu
  // Estudiar @output en Angular (https://angular.io/guide/component-interaction#parent-listens-for-child-event)
  // Estudiar los event bindings en Angular (https://angular.io/guide/template-syntax#event-binding-event)
