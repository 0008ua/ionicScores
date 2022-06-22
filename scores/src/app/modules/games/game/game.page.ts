import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { GameType, IGame, IGamer, IGamerTotal, Round, RoundCfg, RoundMember, UID } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import * as fromAppReducer from '../../../store/reducers/app.reducer';
import * as fromRoundsReducer from '../../../store/reducers/round.reducer';
import * as fromPlayersReducer from '../../../store/reducers/player.reducer';
import * as fromRoundMembersReducer from '../../../store/reducers/round-member.reducer';
import { map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import * as fromRoundActions from 'src/app/store/actions/round.actions';
import * as fromRoundMemberActions from 'src/app/store/actions/round-member.actions';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromAppActions from 'src/app/store/actions/app.actions';
import { GameService } from 'src/app/store/game-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  roundsCfg: RoundCfg[];
  // roundsCfg: RoundCfg[] = environment.games.uno.rounds;
  unoRound: RoundCfg;
  gameType: string;
  gameType$: Observable<GameType>;
  environment = environment;
  showToolbarMenu = false;

  activeRound: string;
  activeRoundId$ = new ReplaySubject<string>(1);
  // activeRoundId$ = new BehaviorSubject<string>(this.roundsCfg[0]._id);
  activePlayerId$ = new ReplaySubject<UID>(1);
  activePlayerId: UID;

  loading$: Observable<boolean>;
  rounds$: Observable<Round[]>;
  rounds: Round[];

  players$: Observable<IGamer[]>;
  players: IGamer[];
  playersWithTotal: IGamerTotal[];
  roundMembers$: Observable<RoundMember[]>;
  roundMembers: RoundMember[];

  constructor(
    private store: Store,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private gameService: GameService,
  ) { }

  ngOnInit() {
    this.loading$ = this.store.select(fromAppReducer.selectLoading);
    this.gameType$ = this.store.select(fromAppReducer.selectGameType);
    this.rounds$ = this.store.select(fromRoundsReducer.selectAllRounds);

    combineLatest([this.gameType$, this.rounds$])
      .subscribe(([gameType, rounds]) => {
        if (!gameType) {
          return;
        }
        this.gameType = gameType;

        this.showToolbarMenu = environment.games[gameType].showToolbarMenu;

        this.roundsCfg = environment.games[gameType].rounds;
        if (gameType === 'uno') {
          this.unoRound = this.roundsCfg[1];

        }
        this.rounds = rounds;
        if (!this.roundsCfg) {
          return;
        }
        if (rounds.length) {
          // game started and active menu 'start'
          if (this.gameType === 'uno') {
            this.activeRoundId$.next(this.roundsCfg[1]._id +
              (rounds.length === 1
                ? this.roundsCfg[1].namePostfix
                : rounds.length)
            );
          } else {
            this.activeRoundId$.next(this.roundsCfg[1]._id);
          }
        } else {
          // game not started and active menu !'start'
          this.activeRoundId$.next(this.roundsCfg[0]._id);
        }
      });

    this.roundMembers$ = this.store.select(fromRoundMembersReducer.selectAllRoundMembers);

    this.players$ = this.store.select(fromPlayersReducer.selectAllPlayers);
    this.players$.subscribe(
      (players) => {
        this.activePlayerId$.next(players[0]._id);
      });

    this.players$.pipe(
      switchMap((players) => {
        this.players = players;
        return this.roundMembers$;
      }))
      .subscribe((roundMembers) => {
        this.roundMembers = roundMembers;
        this.playersWithTotal = this.players
          .map((player) => ({
            ...player,
            totalScore: this.getPlayerTotalScores(player._id),
          }))
          .sort((a, b) => b.totalScore - a.totalScore);

      });

    this.activePlayerId$.subscribe((activePlayerId) => this.activePlayerId = activePlayerId);

    this.route.params.subscribe(params => {
      // this.gameType = params.id;
    });
  }

  getPlayerTotalScores(player: string): number {
    return this.sharedService.getPlayerTotalScores(player);
  }

  onMenuClickHandler(e: any) {
    this.activeRoundId$.next(e.target.value);
  }

  onFinishGameHandler() {
    this.store.dispatch(fromAppActions.loading({ loading: true }));

    const clientRoundsWithTotal = this.rounds.map((round) => {
      const players = round.roundMembers.map((memberId) => {
        const member = this.roundMembers.find((roundMember) => roundMember._id === memberId);
        return {
          _id: member.player,
          score: member.scoresLine.reduce((prev, cur) => prev + cur, 0),
        };
      });
      return { _id: round._id, players };
    });

    const result = {
      _id: 'result',
      players: this.players.map((player) => ({
        _id: player._id,
        score: this.getPlayerTotalScores(player._id),
      }))
    };

    const game: IGame = {
      type: this.rounds[0].clientGame.type,
      rounds: [...clientRoundsWithTotal, result],
    };

    //save to db
    this.gameService.add(game)
      .subscribe(
        (_) => {
          this.onCancelGameHandler();
        },
        (err) => this.store.dispatch(fromAppActions.loading({ loading: false }))
      );
  }

  onCancelGameHandler() {
    this.store.dispatch(fromAppActions.clearGame());
  }

  openNextRound() {
    this.sharedService.addRounds(this.unoRound);
  }

  selectPlayer(playerId: UID) {
    this.activePlayerId$.next(playerId);
  }
}


