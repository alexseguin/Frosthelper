import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronToggleComponent } from './chevron-toggle.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  exports: [
    ChevronToggleComponent
  ],
  declarations: [
    ChevronToggleComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class ChevronToggleModule { }
