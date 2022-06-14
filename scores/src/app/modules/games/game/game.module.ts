import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { UnoRoundsModule } from './uno-rounds/uno-rounds.module';
import { TranslateModule } from '@ngx-translate/core';
import { TrainRoundsModule } from './train-rounds/train-rounds.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    UnoRoundsModule,
    TrainRoundsModule,
  ],
  declarations: [GamePage]
})
export class GamePageModule { }
