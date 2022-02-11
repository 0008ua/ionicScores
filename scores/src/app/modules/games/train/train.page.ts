import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { filter, map, mergeMap, startWith, switchMap, tap } from 'rxjs/operators';
import { IGamer, Round, RoundCfg } from 'src/app/interfaces';
import { clearRounds, deleteRounds } from 'src/app/store/actions/round.actions';
import { environment } from 'src/environments/environment';
import * as fromRoundsReducer from '../../../store/reducers/round.reducer';
import * as fromPlayersReducer from '../../../store/reducers/player.reducer';
import { SharedService } from 'src/app/services/shared.service';
import { GamerService } from 'src/app/store/gamer-data.service';
import { GameService } from 'src/app/store/game-data.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],

})
export class TrainPage implements OnInit {
  roundsCfg: RoundCfg[] = environment.games.train.rounds;

  activeRound: RoundCfg;
  activeRound$ = new BehaviorSubject<RoundCfg>(this.roundsCfg[0]);


  rounds$: Observable<Round[]>;
  rounds: Round[];
  round: Round;

  players$: Observable<IGamer[]>;
  players: IGamer[];
  // gamer - server
  // game - server

  // player - client
  // recentPlayer - client
  // round - client
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private sharedService: SharedService,
    private gameService: GameService,
  ) { }

  ngOnInit() {

    // this.activeRound = this.roundsCfg[0];
    // this.activeRound = this.roundsEnv.filter((roundEnv) => roundEnv.name === initialRound)[0];
    // .map((roundEnv) => ({ ...roundEnv, idx: this.roundsEnv.indexOf(roundEnv) }))[0];

    // this.activeRound$.pipe(
    //   tap((activeRound) => this.activeRound = activeRound),
    //   switchMap((activeRound) => this.store.select(fromRoundsReducer.selectRoundsById(activeRound._id)))
    // ).subscribe((round) => this.round = round);

    this.activeRound$
      .subscribe((activeRound) => this.activeRound = activeRound);

    this.rounds$ = this.store.select(fromRoundsReducer.selectRoundsAll);
    this.rounds$.subscribe((rounds) => {
      this.rounds = rounds;
      if (rounds.length) {
        if (this.activeRound._id === 'start') {
          // game started and active menu 'start'
          this.activeRound$.next(this.roundsCfg[1]);
          // this.activeRound = { ...this.roundsEnv[1], idx: 1 };
        }
      } else {
        if (this.activeRound._id !== 'start') {
          // game not started and active menu !'start'
          this.activeRound$.next(this.roundsCfg[0]);

          // this.activeRound = { ...this.roundsEnv[0], idx: 0 };
        }
      }
    });

    this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    this.players$.subscribe((players) => {
      this.players = players;
    });
  }



  onMenuClickHandler(e: any) {
    this.activeRound$.next(e.target.value);
    // const targetRound = e.target.value;
    // this.activeRound = this.roundsCfg.filter((round) => round._id === targetRound)[0];
    // this.activeRound = this.roundsEnv.filter((roundCfg) => roundCfg.path === round)
    // .map((roundCfg) => ({ ...roundCfg, idx: this.roundsEnv.indexOf(roundCfg) }))[0];
  }

  onFinishGameHandler() {
    const clientRoundsWithTotal = this.rounds.map((round) => {
          const players = round.players.map((player) => {
            return {
              _id: player._id,
              score: player.scoresLine.reduce((prev, cur) => prev + cur, 0)
            }
          });
          return { ...round, players }
        });

    const game = {
      type: this.rounds[0].clientGame.type,
      rounds: clientRoundsWithTotal,
    };

    //save to db
    this.gameService.add(game)
      .subscribe((result) => {
        console.log(result);
        this.store.dispatch(clearRounds());
      });
  }

  onCancelGameHandler() {
    this.store.dispatch(clearRounds());
  }

  // calcScores(scoresLine: number[]): number {
  //   return scoresLine.reduce((prev, cur) => prev + cur, 0);
  // }

  getPlayerTotalScores(player_id: string): number {
    let sum = 0;
    this.rounds.forEach((round) => {
      round.players.forEach((player) => {
        if (player._id === player_id) {
          sum += player.scoresLine.reduce((prev, cur) => prev + cur, 0);
        }
      });
    });
    return sum;
  }

  // getPlayerColor(player_id: string): string {
  //    return this.players.find((player) => player._id === player_id).color;
  //   }

  // getPlayerName(player_id: string): string {
  //   return this.players.find((player) => player._id === player_id).name
  // }
}
