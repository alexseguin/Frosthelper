import { Component } from '@angular/core';
import { DEFAULT_CARD, ModifierDeckService } from 'src/app/services/modifier-deck/modifier-deck.service';


type DrawMode = 'normal' | 'advantage' | 'disadvantage';

@Component({
  selector: 'app-monster-deck',
  templateUrl: './monster-deck.component.html',
  styleUrls: ['./monster-deck.component.scss']
})
export class MonsterDeckComponent {

  drawMode: DrawMode = 'normal';

  currentCards = [DEFAULT_CARD];

  constructor(public monster: ModifierDeckService) { }


  draw(): void {
    
    // switch on draw mode
    switch(this.drawMode) {
      case 'normal':
        this.currentCards = [this.monster.draw()]
        break;
      case 'advantage':
        this.currentCards = [this.monster.draw(), this.monster.draw()];
        break;
      case 'disadvantage':
        this.currentCards = [this.monster.draw(), this.monster.draw()];
        break;
    }

    this.drawMode = 'normal';
  }

  advantage(): void {
    this.drawMode = 'advantage';
  }

  disadvantage(): void {
    this.drawMode = 'disadvantage';
  }

}
