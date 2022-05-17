import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IGamer, Round, RoundCfg } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import * as fromRoundsReducer from '../../../../store/reducers/round.reducer';
import * as fromPlayersReducer from '../../../../store/reducers/player.reducer';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-uno-rounds',
  templateUrl: './uno-rounds.component.html',
  styleUrls: ['./uno-rounds.component.scss'],
})
export class UnoRoundsComponent implements OnInit {
  @Input() activeRound$: Observable<RoundCfg>;
  activeRound: RoundCfg;
  templateRound: RoundCfg = environment.games.uno.rounds[1];

  round: Round;

  roundsCfg = environment.games.train.rounds;

  rounds$: Observable<Round[]>;
  rounds: Round[];

  players$: Observable<IGamer[]>;
  players: IGamer[];
  inverse: {
    [key: string]: 1 | -1;
  } = {};

  constructor(
    private store: Store,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.activeRound$.pipe(
      tap((activeRound) => this.activeRound = activeRound),
      switchMap((activeRound) => this.store.select(fromRoundsReducer.selectByIdRound(activeRound._id)))
    ).subscribe((round) => {
      if (round) {
        this.round = round;
      }
    });

    this.rounds$ = this.store.select(fromRoundsReducer.selectAllRounds);
    this.rounds$.subscribe((rounds) => {
      this.rounds = rounds;
    });

    this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    this.players$.subscribe((players) => {
      this.players = players;
      this.players.forEach((player) => this.inverse[player._id] = 1);
    });

  }

  openNextRound() {
    this.sharedService.addRounds(this.templateRound);
  }

}
