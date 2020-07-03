import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component ({
    selector: 'ps-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  @Input() opened = true;
  @Output() openedChange = new EventEmitter<boolean>();
  menuOptions = [
    {link: 'pizzas/list', text: 'Show Pizzas', icon: 'local_pizza'},
    {link: 'pizzas/add', text: 'Add Pizza', icon: 'add_circle'},
  ];
  close(){
    this.opened = false;
    this.openedChange.emit(false);
  }
}
