import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainPageRoutingModule } from './train-routing.module';

import { TrainPage } from './train.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  declarations: [TrainPage]
})
export class TrainPageModule {}
