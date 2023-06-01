import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';



@NgModule({
  exports: [
    LandingComponent
  ],
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
