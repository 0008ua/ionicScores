import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RummyPageRoutingModule } from './rummy-routing.module';

import { RummyPage } from './rummy.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RummyPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  declarations: [RummyPage]
})
export class RummyPageModule {}
