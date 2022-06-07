import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainRoundsComponent } from './train-rounds.component';
import { RoundWrapperComponent } from './round-wrapper/round-wrapper.component';
import { RoundLengthComponent } from './round-length/round-length.component';
import { RoundRoutesComponent } from './round-routes/round-routes.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { GamersModule } from '../../gamers/gamers.module';
import { RoundStationsComponent } from './round-stations/round-stations.component';
import { RoundCarsComponent } from './round-cars/round-cars.component';
import { RoundBaseDirective } from './round.directive';



@NgModule({
  declarations: [
    TrainRoundsComponent,
    RoundWrapperComponent,
    RoundRoutesComponent,
    RoundLengthComponent,
    RoundStationsComponent,
    RoundCarsComponent,
    RoundBaseDirective,
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
  ],
  exports: [
    TrainRoundsComponent,
  ]
})
export class TrainRoundsModule { }
