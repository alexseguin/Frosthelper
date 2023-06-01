import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChevronToggleModule } from '../chevron-toggle/chevron-toggle.module';
import { NavDropdownComponent } from './nav-dropdown.component';



@NgModule({
  exports: [
    NavDropdownComponent
  ],
  declarations: [
    NavDropdownComponent
  ],
  imports: [
    CommonModule,
    ChevronToggleModule,
    RouterModule
  ]
})
export class NavDropdownModule { }
