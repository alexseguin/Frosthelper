import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavDropdownModule } from './components/nav-dropdown/nav-dropdown.module';
import { HeaderComponent } from './header.component';


@NgModule({
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavDropdownModule,
    RouterModule
  ]
})
export class HeaderModule { }
