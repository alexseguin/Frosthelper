import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronDownComponent } from './chevron-down/chevron-down.component';
import { ChevronUpComponent } from './chevron-up/chevron-up.component';
import { SadFaceComponent } from './sad-face/sad-face.component';
import { HappyFaceComponent } from './happy-face/happy-face.component';
import { CogComponent } from './cog/cog.component';
import { MinusComponent } from './minus/minus.component';



@NgModule({
  exports: [
    ChevronDownComponent,
    ChevronUpComponent,
    SadFaceComponent,
    HappyFaceComponent,
    CogComponent
  ],
  declarations: [
    ChevronDownComponent,
    ChevronUpComponent,
    SadFaceComponent,
    HappyFaceComponent,
    CogComponent,
    MinusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }
