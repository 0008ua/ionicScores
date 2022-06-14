import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundWrapperComponent } from './round-wrapper/round-wrapper.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    RoundWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [
    RoundWrapperComponent,
  ]
})
export class RoundModule { }
