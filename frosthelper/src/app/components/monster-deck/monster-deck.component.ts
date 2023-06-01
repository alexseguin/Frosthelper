import { Component } from '@angular/core';
import { BACK_IMAGE, ModifierDeckService } from 'src/app/services/modifier-deck/modifier-deck.service';

@Component({
  selector: 'app-monster-deck',
  templateUrl: './monster-deck.component.html',
  styleUrls: ['./monster-deck.component.scss']
})
export class MonsterDeckComponent {

  UNFLIPPED_CARD = BACK_IMAGE;

  constructor(public monster: ModifierDeckService) { }


}
