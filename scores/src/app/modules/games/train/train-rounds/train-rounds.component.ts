import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGamer, Round, RoundCfg, RoundMember } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import * as fromRoundsReducer from '../../../../store/reducers/round.reducer';
import * as fromRoundsActions from '../../../../store/actions/round.actions';
import * as fromPlayersReducer from '../../../../store/reducers/player.reducer';
import { switchMap, tap } from 'rxjs/operators';
import * as fromRoundMembersReducer from '../../../../store/reducers/round-member.reducer';
import * as fromRoundMembersActions from '../../../../store/actions/round-member.actions';

@Component({
  selector: 'app-train-rounds',
  templateUrl: './train-rounds.component.html',
  styleUrls: ['./train-rounds.component.scss'],
})
export class TrainRoundsComponent implements OnInit {
  @Input() activeRound$: Observable<RoundCfg>;
  activeRound: RoundCfg;
  // @Input() round: Round;
  round: Round;

  roundsCfg = environment.games.train.rounds;
  carsCfg = environment.games.train.cars;
  routeScoresEnv = environment.games.train.routeScores;
  rounds$: Observable<Round[]>;
  rounds: Round[];
  // round$: Observable<Round>;
  roundMembers$: Observable<RoundMember[]>;
  roundMembers: RoundMember[];

  players$: Observable<IGamer[]>;
  players: IGamer[];

  inverse: {
    [key: string]: 1 | -1;
  } = {};

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('changes')
  //   this.round$ = this.store.select(fromRoundsReducer.selectRoundsById(this.activeRound._id));
  //   this.round$.subscribe((round) => {
  //     this.round = round;
  //     console.log('round', round);
  //   });
  // }

  ngOnInit() {
    this.activeRound$.pipe(
      tap((activeRound) => this.activeRound = activeRound),
      switchMap((activeRound) => this.store.select(fromRoundsReducer.selectRoundsById(activeRound._id)))
    ).subscribe((round) => {
      if (round) {
        this.round = round;
      }
    });

    this.rounds$ = this.store.select(fromRoundsReducer.selectRoundsAll);
    this.rounds$.subscribe((rounds) => {
      this.rounds = rounds;
    });

    this.roundMembers$ = this.store.select(fromRoundMembersReducer.selectRoundMembersAll);
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
    // let result: number;
    // this.round.members.forEach((member_id) => {
    //   this.roundMembers.forEach((member) => {
    //     if (member._id === member_id && member.player_id === player_id) {
    //       result = member.scoresLine.reduce((prev, cur) => prev + cur, 0);
    //     }
    //   });
    // });
    // return result;
    // return scoresLine.reduce((prev, cur) => prev + cur, 0);
  }

  getPlayerColor(player_id: string): string {
    return this.players.find((player) => player._id === player_id).color;
  }

  getPlayerName(player_id: string): string {
    return this.players.find((player) => player._id === player_id).name;
  }
  // round: {
  //   members: ['44', '55']
  // }

  // roundMembers: [
  //   {
  //     _id: '44',
  //     player_id: 'dddsdfsdf',
  //     scoresLine: [5, 5, 6]
  //   }
  // ]



  getMemberByPlayer_id(player_id: string): RoundMember {
    return this.roundMembers
      .filter((roundMember) =>
        roundMember.player_id === player_id && this.round.members.includes(roundMember._id)
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

    // let count = 0;
    // this.roundMembers
    //   .forEach((member) => {
    //     if (member._id === member_id) {
    //       member.scoresLine.forEach((arrItem) => {
    //         if (arrItem === item) {
    //           count++;
    //         }
    //       });
    //     }
    //   });
    // return count;
  }

  inverseScore(player_id: string) {
    this.inverse[player_id] = (this.inverse[player_id] * -1) as 1 | -1;
  }

  addToScoresLine(player_id: string, score: number) {
    const member = this.getMemberByPlayer_id(player_id);
    const changes = {
      ...member,
      scoresLine: [...member.scoresLine, score],
    };
    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: member._id,
        changes,
      }
    }));
  }

  removeFromScoresLine(player_id: string, score: number) {
    const member = this.getMemberByPlayer_id(player_id);
    const scoresLine = [...member.scoresLine];
    const index = scoresLine.indexOf(score);
    scoresLine.splice(index, 1);

    const changes = {
      ...member,
      scoresLine,
    };

    // const changes = this.round.players
    //   .map((player) => {
    //     if (player._id === player_id) {
    //       const scoresLine = [...player.scoresLine];
    //       const index = scoresLine.indexOf(score);
    //       scoresLine.splice(index, 1);
    //       if (index !== -1) {
    //         return { ...player, scoresLine };
    //       }
    //     }
    //     return player;
    //   });
    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: member._id,
        changes,
      }
    }));
  }

  setScoresLine(player_id: string, scoresLine: number[]) {
    const member = this.getMemberByPlayer_id(player_id);
    const changes = {
      ...member,
      scoresLine,
    };

    this.store.dispatch(fromRoundMembersActions.updateRoundMember({
      roundMember:
      {
        id: member._id,
        changes,
      }
    }));
  }


  // addToScoresLine(player_id: string, score: number) {
  //   console.log('upd', score)
  //   const changes = this.round.players
  //     .map((player) => {
  //       if (player._id === player_id) {
  //         return { ...player, scoresLine: [...player.scoresLine, score] };
  //       }
  //       return player;
  //     });
  //   this.store.dispatch(fromRoundsActions.updateRound({
  //     round:
  //     {
  //       id: this.round._id,
  //       changes: {
  //         players: changes,
  //       }
  //     }
  //   }));
  // }

  // removeFromScoresLine(player_id: string, score: number) {
  //   const changes = this.round.players
  //     .map((player) => {
  //       if (player._id === player_id) {
  //         const scoresLine = [...player.scoresLine];
  //         const index = scoresLine.indexOf(score);
  //         scoresLine.splice(index, 1);
  //         if (index !== -1) {
  //           return { ...player, scoresLine };
  //         }
  //       }
  //       return player;
  //     });
  //   this.store.dispatch(fromRoundsActions.updateRound({
  //     round:
  //     {
  //       id: this.round._id,
  //       changes: {
  //         players: changes,
  //       }
  //     }
  //   }));
  // }

  // setScoresLine(player_id: string, scoresLine: number[]) {
  //   const changes = this.round.players
  //     .map((player) => {
  //       if (player._id === player_id) {
  //           return { ...player, scoresLine };
  //       }
  //       return player;
  //     });
  //   this.store.dispatch(fromRoundsActions.updateRound({
  //     round:
  //     {
  //       id: this.round._id,
  //       changes: {
  //         players: changes,
  //       }
  //     }
  //   }));
  // }

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
