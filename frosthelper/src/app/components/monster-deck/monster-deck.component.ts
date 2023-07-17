import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DrawMode,
  ModifierDeckService,
} from 'src/app/services/modifier-deck/modifier-deck.service';
import { ModifierCard } from 'src/app/types/cards';
import { ModifierDiscardDialogComponent } from '../common/modifier-discard-dialog/modifier-discard-dialog.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ModifierSettingsDialogComponent } from '../common/modifier-settings-dialog/modifier-settings-dialog.component';

@Component({
  selector: 'app-monster-deck',
  templateUrl: './monster-deck.component.html',
  styleUrls: ['./monster-deck.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)', position: 'absolute' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)', position: 'absolute'  }))
      ])
    ])
  ]
})
export class MonsterDeckComponent {
  constructor(public monster: ModifierDeckService, private dialog: MatDialog) {}

  viewDiscard(): void {
    this.dialog.open(ModifierDiscardDialogComponent, {
      data: {
        discard: this.monster.discarded,
      },
    });
  }

  viewSettings(): void {
    this.dialog.open(ModifierSettingsDialogComponent, {
      data: {},
    });
  }

  async draw(): Promise<void> {
    await this.monster.draw();
  }

  advantage(): void {
    this.monster.toggleAdvantage();
  }

  disadvantage(): void {
    this.monster.toggleDisadvantage();
  }

  get currentCards(): ModifierCard[] {
    return this.monster.cards;
  }

  get drawMode(): DrawMode {
    return this.monster.currentDrawMode;
  }

  get deckSize(): number {
    return this.monster.deckSize;
  }
}
