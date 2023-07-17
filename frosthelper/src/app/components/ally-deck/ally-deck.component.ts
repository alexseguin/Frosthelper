import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DrawMode, ModifierDeckService } from 'src/app/services/modifier-deck/modifier-deck.service';
import { ModifierCard } from 'src/app/types/cards';
import { ModifierDiscardDialogComponent } from '../common/modifier-discard-dialog/modifier-discard-dialog.component';
import { ModifierSettingsDialogComponent } from '../common/modifier-settings-dialog/modifier-settings-dialog.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-ally-deck',
  templateUrl: './ally-deck.component.html',
  styleUrls: ['./ally-deck.component.scss'],
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
export class AllyDeckComponent {
  constructor(public ally: ModifierDeckService, private dialog: MatDialog) {}

  viewDiscard(): void {
    this.dialog.open(ModifierDiscardDialogComponent, {
      data: {
        discard: this.ally.discarded,
      },
    });
  }

  viewSettings(): void {
    this.dialog.open(ModifierSettingsDialogComponent, {
      data: {},
    });
  }

  async draw(): Promise<void> {
    await this.ally.draw();
  }

  advantage(): void {
    this.ally.toggleAdvantage();
  }

  disadvantage(): void {
    this.ally.toggleDisadvantage();
  }

  get currentCards(): ModifierCard[] {
    return this.ally.cards;
  }

  get drawMode(): DrawMode {
    return this.ally.currentDrawMode;
  }

  get deckSize(): number {
    return this.ally.deckSize;
  }
}
