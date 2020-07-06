import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() menuClick = new EventEmitter<void>();
  onClick() {
    this.menuClick.emit();
  }
}
