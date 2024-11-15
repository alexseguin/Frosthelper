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
import { ModifierDiscardDialogModule } from '../common/modifier-discard-dialog/modifier-discard-dialog.module';
import { ModifierSettingsDialogModule } from '../common/modifier-settings-dialog/modifier-settings-dialog.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [MonsterDeckComponent],
  declarations: [MonsterDeckComponent],
  imports: [
    CommonModule,
    IconsModule,
    NoopAnimationsModule,
    ModifierDiscardDialogModule,
    ModifierSettingsDialogModule,
  ],
  providers: [
    ModifierDeckService,
    { provide: CURSE, useValue: ({ ...M_CURSE, added: true}) },
    { provide: BLESS, useValue: ({ ...M_BLESS, added: true })},
    { provide: DEFAULT_DECK, useValue: DEFAULT_MONSTER_MODIFIER_DECK },
  ],
})
export class MonsterDeckModule {}
