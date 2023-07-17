import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifierSettingsDialogComponent } from './modifier-settings-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ModifierSettingsDialogComponent
  ],
  exports: [
    ModifierSettingsDialogComponent,
    MatDialogModule
  ],
  imports: [
    CommonModule, MatDialogModule
  ]
})
export class ModifierSettingsDialogModule { }
