import { Component, Injector, OnInit } from '@angular/core';
import { NamedScore } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import { ROUND_COMPONENT } from '../../../round/round-interfaces';
import { RoundBaseDirective, RoundScoresLineDirective } from '../../../round/round.directive';

@Component({
  selector: 'app-round-uno',
  templateUrl: './round-uno.component.html',
  styleUrls: ['./round-uno.component.scss'],
  providers: [{
    provide: ROUND_COMPONENT,
    useExisting: RoundUnoComponent,
  }]
})
export class RoundUnoComponent
  extends RoundScoresLineDirective
  implements OnInit {

  namedScoresEnv = environment.games.uno.namedScores;
  namedScoreLine: NamedScore[] = [];

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() { }

  // addToNamedScoresLine(namedScore: NamedScore) {
  //   this.namedScoreLine.push(namedScore);
  //   this.addToScoresLine(namedScore.score);
  // }

  // removeFromNamedScoresLine(namedScore: NamedScore) {
  //   const index = this.namedScoreLine.findIndex((ns) => ns.name === namedScore.name);
  //   if (index !== -1) {
  //     this.namedScoreLine.splice(index, 1)
  //   };
  //   console.log('this.namedScoreLine', this.namedScoreLine);
  //   this.removeFromScoresLine(namedScore.score);
  // }
}
