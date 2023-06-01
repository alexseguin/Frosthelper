import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chevron-toggle',
  templateUrl: './chevron-toggle.component.html'
})
export class ChevronToggleComponent {
  @Input() open = false;
  @Output() toggled = new EventEmitter<boolean>();
  
  toggle(): void {
    this.open = !this.open;
    this.toggled.emit(this.open);
  }
}
