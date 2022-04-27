import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnoPageRoutingModule } from './uno-routing.module';

import { UnoPage } from './uno.page';
import { UnoRoundsComponent } from './uno-rounds/uno-rounds.component';
import { TranslateModule } from '@ngx-translate/core';
import { GamersModule } from '../gamers/gamers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnoPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    GamersModule,
  ],
  declarations: [
    UnoPage,
    UnoRoundsComponent,
  ]
})
export class UnoPageModule {}
