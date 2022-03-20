import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGamer } from 'src/app/interfaces';
import * as fromAnalyticsActions from 'src/app/store/actions/analytics.actions';
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
  
  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.store.dispatch(fromAnalyticsActions[this.stats[0]._id]({gameType: 'train'}));
    this.analytics$ = this.store.select(selectRaiting);
    this.loading$ = this.store.select(selectLoading);
  }

  onMenuClickHandler(e: any) {
    this.stat = e.target.value;
    this.store.dispatch(fromAnalyticsActions[this.stat._id]({ gameType: 'train' }));
  }
}
