import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGame, IGamer } from 'src/app/interfaces';
import { GameService } from 'src/app/store/game-data.service';
import { GamerService } from 'src/app/store/gamer-data.service';
import { environment } from 'src/environments/environment';
import * as fromAnalyticsActions from 'src/app/store/actions/analytics.actions';
import { selectRating, selectLoading } from 'src/app/store/reducers/analytics.reducer';

@Component({
  selector: 'app-rummy',
  templateUrl: './rummy.page.html',
  styleUrls: ['./rummy.page.scss'],
})
export class RummyPage implements OnInit {
  stats = environment.games.rummy.stats;
  players: IGamer[];
  analytics$: Observable<IGamer[]>;
  loading$: Observable<boolean>;
  stat: any = this.stats[0];
  math = Math;
  array = Array;

  games$: Observable<IGame[]>;
  gamers$: Observable<IGamer[]>;

  constructor(
    private store: Store,
    private gameService: GameService,
    private gamerService: GamerService,
  ) {}

  ionViewWillEnter() {
    // console.log('view')
    this.store.dispatch(fromAnalyticsActions[this.stats[0]._id]({ gameType: 'rummy' }));
  }

  ngOnInit() {
    console.log('init')

    this.games$ = this.gameService.entities$;
    this.games$
      .subscribe(() =>
        this.store.dispatch(fromAnalyticsActions[this.stat._id]({ gameType: 'rummy' }))
      );

    this.gamers$ = this.gamerService.entities$;
    this.gamers$.subscribe((x) => console.log('gamers', x))


    console.log('[this.stats[0]._id', this.stats[0]._id);
    this.analytics$ = this.store.select(selectRating);
    // this.analytics$.pipe(
    //   withLatestFrom(this.gamers$),
    //   map((x) => {
    //     this.store.dispatch(fromAnalyticsActions.addMany({analytics: x[1]}))
    //     console.log('an0', x)
    //   })
    // )
    //   .subscribe((x) => console.log('an', x))

    this.loading$ = this.store.select(selectLoading);

  }



}
