import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGame, IGamer, IUser } from 'src/app/interfaces';
import * as fromAnalyticsActions from 'src/app/store/actions/analytics.actions';
import { GameService } from 'src/app/store/game-data.service';
import { selectRaiting, selectLoading } from 'src/app/store/reducers/analytics.reducer';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],
})
export class TrainPage implements OnInit {
  players: IGamer[];
  analytics$: Observable<IGamer[]>;
  loading$: Observable<boolean>;
  stats = environment.games.train.stats;
  stat: any = this.stats[0];
  math = Math;
  array =Array;

  games$: Observable<IGame[]>;
  gamers$: Observable<IGamer[]>;

  constructor(
    private store: Store,
    private gameService: GameService,
  ) { }

  ngOnInit() {
    this.games$ = this.gameService.entities$;
    this.games$
      .subscribe(()=>
        this.store.dispatch(fromAnalyticsActions[this.stat._id]({ gameType: 'train' }))
       );


    this.store.dispatch(fromAnalyticsActions[this.stats[0]._id]({gameType: 'train'}));
    this.analytics$ = this.store.select(selectRaiting);
    this.loading$ = this.store.select(selectLoading);
  }

  onMenuClickHandler(e: any) {
    this.stat = e.target.value;
    this.store.dispatch(fromAnalyticsActions[this.stat._id]({ gameType: 'train' }));
  }
}
