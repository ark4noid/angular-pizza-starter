import { Component} from '@angular/core'
import {MatSidenavModule} from '@angular/material/sidenav';

@Component ({
    selector: 'ps-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.html']
})
export class MenuComponent {
    @ViewChild('sidenav') sidenav: MatSidenavModule;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
 
}