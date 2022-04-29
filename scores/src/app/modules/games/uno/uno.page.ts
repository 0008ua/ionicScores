import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { IGamer, IGamerTotal, Round, RoundCfg, RoundMember } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import * as fromAppReducer from '../../../store/reducers/app.reducer';
import * as fromRoundsReducer from '../../../store/reducers/round.reducer';
import * as fromPlayersReducer from '../../../store/reducers/player.reducer';
import * as fromRoundMembersReducer from '../../../store/reducers/round-member.reducer';
import { switchMap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import * as fromRoundActions from 'src/app/store/actions/round.actions';
import * as fromRoundMemberActions from 'src/app/store/actions/round-member.actions';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromAppActions from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.page.html',
  styleUrls: ['./uno.page.scss'],
})
export class UnoPage implements OnInit {
  roundsCfg: RoundCfg[] = environment.games.uno.rounds;

  activeRound: RoundCfg;
  activeRound$ = new BehaviorSubject<RoundCfg>(this.roundsCfg[0]);

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
    private router: Router,
  ) { }

  // ionViewWillEnter() {
  //   console.log('train ionViewWillEnter');
  //   this.store.dispatch(fromRoundActions.clearRounds());
  //   this.store.dispatch(fromRoundMemberActions.clearRoundMembers());
  //   this.activeRound$.next(this.roundsCfg[0]);
  // }

  ngOnInit() {
    // this.router.navigate(['/', 'games', 'train']).then((x) => console.log('x', x)).catch((e) => console.log('e', e));

    // this.route.url
    //   .subscribe((_) => {
    //     console.log('url -uno', _);
    //     // start new game by navigating from another one
    //     this.onCancelGameHandler();

    //   });

    // this.store.dispatch(fromRoundActions.clearRounds());


    this.loading$ = this.store.select(fromAppReducer.selectLoading);

    this.roundMembers$ = this.store.select(fromRoundMembersReducer.selectAllRoundMembers);

    this.activeRound$
      .subscribe((activeRound) => this.activeRound = activeRound);

    this.rounds$ = this.store.select(fromRoundsReducer.selectAllRounds);
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

  }

  getPlayerTotalScores(player: string): number {
    return this.sharedService.getPlayerTotalScores(player, this.roundMembers);
    // let sum = 0;
    // this.roundMembers.forEach((roundMember) => {
    //   if (roundMember.player === player) {
    //     sum += roundMember.scoresLine.reduce((prev, cur) => prev + cur, 0);
    //   }
    // });
    // return sum;
  }

  onMenuClickHandler(e: any) {
    this.activeRound$.next(e.target.value);
  }

  onFinishGameHandler() {

  }

  onCancelGameHandler() {
    this.store.dispatch(fromAppActions.clearGame());

    // this.store.dispatch(fromRoundActions.clearRounds());
    // this.store.dispatch(fromRoundMemberActions.clearRoundMembers());
    // this.activeRound$.next(this.roundsCfg[0]);
  }
}
