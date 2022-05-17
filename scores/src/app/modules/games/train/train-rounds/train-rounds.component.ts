import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGamer, Round, RoundCfg, RoundMember } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import * as fromRoundsReducer from '../../../../store/reducers/round.reducer';
import * as fromRoundsActions from '../../../../store/actions/round.actions';
import * as fromPlayersReducer from '../../../../store/reducers/player.reducer';
import { map, switchMap, tap } from 'rxjs/operators';
import * as fromRoundMembersReducer from '../../../../store/reducers/round-member.reducer';
import * as fromRoundMembersActions from '../../../../store/actions/round-member.actions';
import { denormalize, schema } from 'normalizr';

@Component({
  selector: 'app-train-rounds',
  templateUrl: './train-rounds.component.html',
  styleUrls: ['./train-rounds.component.scss'],
})

export class TrainRoundsComponent implements OnInit {
  @Input() activeRound$: Observable<RoundCfg>;
  activeRound: RoundCfg;

  round: Round;
  round$: Observable<Round>;

  roundsCfg = environment.games.train.rounds;
  carsCfg = environment.games.train.cars;
  routeScoresEnv = environment.games.train.routeScores;
  rounds$: Observable<Round[]>;
  rounds: Round[];
  // round$: Observable<Round>;
  roundMembers$: Observable<RoundMember[]>;
  roundMembers: RoundMember[];
  roundMembersEntities$: Observable<any>;
  roundMembersEntities: any;

  players$: Observable<IGamer[]>;
  players: IGamer[];
  playersEnteties$: Observable<any>;
  playersEnteties: any;

  inverse: {
    [key: string]: 1 | -1;
  } = {};

  constructor(
    private route: ActivatedRoute,
    private store: Store,
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

    this.roundMembers$ = this.store.select(fromRoundMembersReducer.selectAllRoundMembers);
    this.roundMembers$.subscribe((roundMembers) => {
      this.roundMembers = roundMembers;
    });


    this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    this.players$.subscribe((players) => {
      this.players = players;
      this.players.forEach((player) => this.inverse[player._id] = 1);

    });
  }

  calcScores(player_id: string): number {
    return this.getMemberByPlayer_id(player_id).scoresLine.reduce((prev, cur) => prev + cur, 0);
  }

  getPlayerColor(player_id: string): string {
    return this.players.find((player) => player._id === player_id).color;
  }

  getPlayerName(player_id: string): string {
    return this.players.find((player) => player._id === player_id).name;
  }

  getMemberByPlayer_id(player_id: string): RoundMember {
    return this.roundMembers
      .filter((roundMember) =>
        roundMember.player === player_id && this.round.roundMembers.includes(roundMember._id)
      )[0];
  }

  calcQtyOfArrItems(player_id: string, item: string | number): number {
    let count = 0;

    this.getMemberByPlayer_id(player_id).scoresLine.forEach((arrItem) => {
      if (arrItem === item) {
        count++;
      }
    });

    return count;
  }

  inverseScore(player_id: string) {
    this.inverse[player_id] = (this.inverse[player_id] * -1) as 1 | -1;
  }

  addToScoresLine(player_id: string, score: number) {
    const roundMember = this.getMemberByPlayer_id(player_id);
    const changes = {
      ...roundMember,
      scoresLine: [...roundMember.scoresLine, score],
    };
    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: roundMember._id,
        changes,
      }
    }));
  }

  removeFromScoresLine(player_id: string, score: number) {
    const roundMember = this.getMemberByPlayer_id(player_id);
    const scoresLine = [...roundMember.scoresLine];
    const index = scoresLine.indexOf(score);
    scoresLine.splice(index, 1);

    const changes = {
      ...roundMember,
      scoresLine,
    };

    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: roundMember._id,
        changes,
      }
    }));
  }

  setScoresLine(player_id: string, scoresLine: number[]) {
    const roundMember = this.getMemberByPlayer_id(player_id);
    const changes = {
      ...roundMember,
      scoresLine,
    };

    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: roundMember._id,
        changes,
      }
    }));
  }


  onMarkLongestHandler(e: any, player_id: string) {
    const checked = e.target.checked;
    if (checked) {
      this.setScoresLine(player_id, [10]);
    } else {
      this.setScoresLine(player_id, []);
    }
  }

  onChangeStationsHandler(e: any) {
    console.log('e-value', e.target.value);
  }
}
