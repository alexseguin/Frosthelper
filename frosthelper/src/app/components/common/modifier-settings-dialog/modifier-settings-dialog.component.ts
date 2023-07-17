import { Component } from '@angular/core';
import { ModifierDeckService } from 'src/app/services/modifier-deck/modifier-deck.service';

@Component({
  selector: 'app-modifier-settings-dialog',
  templateUrl: './modifier-settings-dialog.component.html',
  styleUrls: ['./modifier-settings-dialog.component.scss']
})
export class ModifierSettingsDialogComponent {

  constructor(private modifier: ModifierDeckService) { }

  addBlessing(): void {
    this.modifier.addBless();
  }

  removeBlessing(): void {
    this.modifier.removeBless();
  }

  addCurse(): void {
    this.modifier.addCurse();
  }

  removeCurse(): void {
    this.modifier.removeCurse();
  } 

  get numberOfCurses(): number {
    return this.modifier.numberOfCurses;
  }

  get numberOfBessings(): number {
    return this.modifier.numberOfBlessings;
  }

}
