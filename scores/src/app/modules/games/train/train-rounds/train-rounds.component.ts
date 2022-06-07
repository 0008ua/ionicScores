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
  // activeRound: RoundCfg;

  // round: Round;
  // round$: Observable<Round>;

  // roundsCfg = environment.games.train.rounds;
  // carsCfg = environment.games.train.carsScores;
  // routeScoresEnv = environment.games.train.routesScores;
  rounds$: Observable<Round[]>;
  // rounds: Round[];
  // // round$: Observable<Round>;
  // roundMembers$: Observable<RoundMember[]>;
  // roundMembers: RoundMember[];
  // roundMembersEntities$: Observable<any>;
  // roundMembersEntities: any;

  players$: Observable<IGamer[]>;
  // players: IGamer[];
  // playersEnteties$: Observable<any>;
  // playersEnteties: any;

  // inverse: {
  //   [key: string]: 1 | -1;
  // } = {};

  constructor(
    // private route: ActivatedRoute,
    private store: Store,
  ) { }

  ngOnInit() {

    // this.activeRound$.pipe(
    //   tap((activeRound) => this.activeRound = activeRound),
    //   switchMap((activeRound) => this.store.select(fromRoundsReducer.selectByIdRound(activeRound._id)))
    // ).subscribe((round) => {
    //   if (round) {
    //     this.round = round;
    //   }
    // });

    // this.activeRound$.subscribe((activeRound) => this.activeRound = activeRound);
    this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    // this.players$.subscribe((players) => this.players = players);

    this.rounds$ = this.store.select(fromRoundsReducer.selectAllRounds);
    // this.rounds$.subscribe((rounds) => {
    //   this.rounds = rounds;
    // });

    // this.roundMembers$ = this.store.select(fromRoundMembersReducer.selectAllRoundMembers);
    // this.roundMembers$.subscribe((roundMembers) => {
    //   this.roundMembers = roundMembers;
    // });


    // this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    // this.players$.subscribe((players) => {
    //   this.players = players;
    //   this.players.forEach((player) => this.inverse[player._id] = 1);

    // });
  }

  // calcScores(playerId: string): number {
  //   return this.getMemberByPlayerId(playerId).scoresLine.reduce((prev, cur) => prev + cur, 0);
  // }

  // getPlayerColor(playerId: string): string {
  //   return this.players.find((player) => player._id === playerId).color;
  // }

  // getPlayerName(playerId: string): string {
  //   return this.players.find((player) => player._id === playerId).name;
  // }

  // getMemberByPlayerId(playerId: string): RoundMember {
  //   return this.roundMembers
  //     .filter((roundMember) =>
  //       roundMember.player === playerId && this.round.roundMembers.includes(roundMember._id)
  //     )[0];
  // }

  // calcQtyOfArrItems(playerId: string, item: string | number): number {
  //   let count = 0;

  //   this.getMemberByPlayerId(playerId).scoresLine.forEach((arrItem) => {
  //     if (arrItem === item) {
  //       count++;
  //     }
  //   });

  //   return count;
  // }

  // inverseScore(playerId: string) {
  //   this.inverse[playerId] = (this.inverse[playerId] * -1) as 1 | -1;
  // }

  // addToScoresLine(playerId: string, score: number) {
  //   const roundMember = this.getMemberByPlayerId(playerId);
  //   const changes = {
  //     ...roundMember,
  //     scoresLine: [...roundMember.scoresLine, score],
  //   };
  //   this.store.dispatch(fromRoundMembersActions.updateRoundMember({
  //     roundMember:
  //     {
  //       id: roundMember._id,
  //       changes,
  //     }
  //   }));
  // }

  // removeFromScoresLine(playerId: string, score: number) {
  //   const roundMember = this.getMemberByPlayerId(playerId);
  //   const scoresLine = [...roundMember.scoresLine];
  //   const index = scoresLine.indexOf(score);
  //   scoresLine.splice(index, 1);

  //   const changes = {
  //     ...roundMember,
  //     scoresLine,
  //   };

  //   this.store.dispatch(fromRoundMembersActions.updateRoundMember({
  //     roundMember:
  //     {
  //       id: roundMember._id,
  //       changes,
  //     }
  //   }));
  // }

  // setScoresLine(playerId: string, scoresLine: number[]) {
  //   const roundMember = this.getMemberByPlayerId(playerId);
  //   const changes = {
  //     ...roundMember,
  //     scoresLine,
  //   };

  //   this.store.dispatch(fromRoundMembersActions.updateRoundMember({
  //     roundMember:
  //     {
  //       id: roundMember._id,
  //       changes,
  //     }
  //   }));
  // }


  // onMarkLongestHandler(e: any, playerId: string) {
  //   const checked = e.target.checked;
  //   if (checked) {
  //     this.setScoresLine(playerId, [10]);
  //   } else {
  //     this.setScoresLine(playerId, []);
  //   }
  // }

  // onChangeStationsHandler(e: any) {
  //   console.log('e-value', e.target.value);
  // }
}
