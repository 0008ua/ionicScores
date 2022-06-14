import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGamer, Round, RoundCfg, UID } from 'src/app/interfaces';
import * as fromRoundsReducer from '../../../../store/reducers/round.reducer';
import * as fromPlayersReducer from '../../../../store/reducers/player.reducer';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-train-rounds',
  templateUrl: './train-rounds.component.html',
  styleUrls: ['./train-rounds.component.scss'],
})

export class TrainRoundsComponent implements OnInit {
  @Input() activeRoundId$: Observable<string>;
  @Input() activePlayerId$: Observable<UID>;
  rounds$: Observable<Round[]>;
  players$: Observable<IGamer[]>;
  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    // this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    this.rounds$ = this.store.select(fromRoundsReducer.selectAllRounds);

    // this.activeRoundId$.pipe(
    //   // tap((activeRound) => this.activeRound = activeRound),
    //   switchMap((activeRoundId) => this.store.select(fromRoundsReducer.selectByIdRound(activeRoundId)))
    // ).subscribe((round) => {
    //   if (round) {
    //     this.round = round;
    //   }
    // });
  }
}
