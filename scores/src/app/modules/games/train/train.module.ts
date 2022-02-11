import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainPageRoutingModule } from './train-routing.module';

import { TrainPage } from './train.page';
import { TrainRoundsComponent } from './train-rounds/train-rounds.component';
import { TranslateModule } from '@ngx-translate/core';
import { GamersModule } from '../gamers/gamers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true,
    }),
    GamersModule,
  ],
  declarations: [
    TrainPage,
    TrainRoundsComponent,
  ],
})
export class TrainPageModule { }
