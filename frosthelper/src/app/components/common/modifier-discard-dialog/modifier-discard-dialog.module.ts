import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifierDiscardDialogComponent } from './modifier-discard-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [
    ModifierDiscardDialogComponent
  ],
  exports: [
    ModifierDiscardDialogComponent,
    MatDialogModule
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    IconsModule
  ]
})
export class ModifierDiscardDialogModule { }
