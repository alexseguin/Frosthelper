import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllyDeckComponent } from './ally-deck.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { ModifierDeckService, CURSE, BLESS, DEFAULT_DECK } from 'src/app/services/modifier-deck/modifier-deck.service';
import { ModifierDiscardDialogModule } from '../common/modifier-discard-dialog/modifier-discard-dialog.module';
import { ModifierSettingsDialogModule } from '../common/modifier-settings-dialog/modifier-settings-dialog.module';
import { M_CURSE, M_BLESS, DEFAULT_ALLY_MODIFIER_DECK } from './ally-modifier-deck';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  exports: [
    AllyDeckComponent
  ],
  declarations: [
    AllyDeckComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    IconsModule,
    ModifierDiscardDialogModule,
    ModifierSettingsDialogModule,
  ],
  providers: [
    ModifierDeckService,
    { provide: CURSE, useValue: ({ ...M_CURSE, added: true}) },
    { provide: BLESS, useValue: ({ ...M_BLESS, added: true })},
    { provide: DEFAULT_DECK, useValue: DEFAULT_ALLY_MODIFIER_DECK },
  ],
})
export class AllyDeckModule { }
