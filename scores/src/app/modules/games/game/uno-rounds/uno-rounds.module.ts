import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { UnoRoundsComponent } from './uno-rounds.component';
import { GamersModule } from '../../gamers/gamers.module';
import { RoundUnoComponent } from './round-uno/round-uno.component';
import { RoundModule } from '../../round/round.module';

@NgModule({
  declarations: [
    UnoRoundsComponent,
    RoundUnoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    TranslateModule.forChild({
      extend: true,
    }),
    GamersModule,
    RoundModule,
  ],
  exports: [
    UnoRoundsComponent,
    RoundUnoComponent,
  ]
})

export class UnoRoundsModule { }
