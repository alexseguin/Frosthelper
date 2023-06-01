import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllyDeckComponent } from './ally-deck.component';



@NgModule({
  exports: [
    AllyDeckComponent
  ],
  declarations: [
    AllyDeckComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AllyDeckModule { }
