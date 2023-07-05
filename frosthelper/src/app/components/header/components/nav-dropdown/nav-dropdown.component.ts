import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
})
export class NavDropdownComponent {
  open = false;
  withinDropdown = false;

  toggled(isOpen: boolean): void {
    this.open = isOpen;
  }


  mouseEntersDropdown(): void {
    this.withinDropdown = true;
  }
  
  async mouseLeavesDropdown(): Promise<void> {

    this.withinDropdown = false;

    await new Promise(resolve => setTimeout(resolve, 500));
    
    if(!this.withinDropdown) {
      this.open = false;
    }
  }
}
