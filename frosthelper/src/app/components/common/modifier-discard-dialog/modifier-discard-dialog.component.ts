import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifierCard } from 'src/app/types/cards';

type DiscardDialogData = {
  discard: ModifierCard[];
}

@Component({
  selector: 'app-modifier-discard-dialog',
  templateUrl: './modifier-discard-dialog.component.html',
  styleUrls: ['./modifier-discard-dialog.component.scss']
})
export class ModifierDiscardDialogComponent {

  discard: ModifierCard[];

  constructor(@Inject(MAT_DIALOG_DATA) data: DiscardDialogData  ) {
    this.discard = data.discard;
  }

  
}
