import { Component, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { NamedScore, Round, RoundMember, UID } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';
import { selectByIdRoundMember } from 'src/app/store/reducers/round-member.reducer';
import { selectAllRounds } from 'src/app/store/reducers/round.reducer';
import { environment } from 'src/environments/environment';
import { ROUND_COMPONENT } from '../../round-interfaces';
import { RoundScoresLineDirective, RoundTBaseDirective } from '../../round.directive';

@Component({
  selector: 'app-round-thousand',
  templateUrl: './round-thousand.component.html',
  styleUrls: ['./round-thousand.component.scss'],
  providers: [{
    provide: ROUND_COMPONENT,
    useExisting: RoundThousandComponent,
  }]
})
export class RoundThousandComponent
  extends RoundTBaseDirective
  implements OnInit {
  // rounds$: Observable<Round[]>;
  // roundMembers$: Observable<RoundMember[]>;

  scores = {} as {
    [key: UID]: number | string;
  };
  roundsScoresEnv = environment.games.thousand.roundsScores;
  nextRound = environment.games.thousand.rounds;
  // namedScoreLine: NamedScore[] = [];

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.resetScores();
  }

  resetScores() {
    this.roundMembers$.pipe(first()).subscribe((roundMembers) =>
      roundMembers.forEach((roundMember) => this.scores[roundMember._id] = '')
    );
  }

  addAllScores() {
    console.log('this.scores', this.scores)
    let roundFinished = false;
    for (const key in this.scores) {
      if (this.scores.hasOwnProperty(key)) {
        this.store.select(selectByIdRoundMember(key)).pipe(
          first()
        )
          .subscribe((roundMember) => {
            this.addToNamedScoresLine(
              { name: (this.scores[key] || 0) + '', value: Number(this.scores[key]) || 0 },
              roundMember.player
            );
            if (roundMember.namedScoresLine.length === 2) {
              roundFinished = true;
            }
          });

      }
    }
    if (roundFinished) {
      this.openNextRound();
      return;
    }
    this.resetScores();
  }

  openNextRound() {
    this.sharedService.addRounds(this.nextRound[1]);
  }

}
