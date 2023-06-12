import { Component } from '@angular/core';
import { DEFAULT_CARD, ModifierDeckService } from 'src/app/services/modifier-deck/modifier-deck.service';
import { ModifierCard } from 'src/app/types/cards';

@Component({
  selector: 'app-monster-deck',
  templateUrl: './monster-deck.component.html',
  styleUrls: ['./monster-deck.component.scss']
})
export class MonsterDeckComponent {

  currentCard = DEFAULT_CARD;

  constructor(public monster: ModifierDeckService) { }


  draw(): void {
    this.currentCard = this.monster.draw();
    console.log(this.monster.stateDebug());
  }
}
