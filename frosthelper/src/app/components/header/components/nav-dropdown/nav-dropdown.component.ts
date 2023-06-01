import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html'
})
export class NavDropdownComponent {
  open = false;

  toggled(isOpen: boolean) {
    this.open = isOpen;
  }
}
