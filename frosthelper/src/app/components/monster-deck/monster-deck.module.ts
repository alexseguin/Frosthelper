import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterDeckComponent } from './monster-deck.component';
import {
  BLESS,
  CURSE,
  DEFAULT_DECK,
  ModifierDeckService,
} from 'src/app/services/modifier-deck/modifier-deck.service';
import {
  DEFAULT_MONSTER_MODIFIER_DECK,
  M_BLESS,
  M_CURSE,
} from './monster-modifier-deck';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  exports: [MonsterDeckComponent],
  declarations: [MonsterDeckComponent],
  imports: [CommonModule, IconsModule],
  providers: [
    ModifierDeckService,
    { provide: CURSE, useValue: M_CURSE },
    { provide: BLESS, useValue: M_BLESS },
    { provide: DEFAULT_DECK, useValue: DEFAULT_MONSTER_MODIFIER_DECK },
  ],
})
export class MonsterDeckModule {}
