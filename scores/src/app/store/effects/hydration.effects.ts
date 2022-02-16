import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { State } from '../reducers';
import * as HydrationActions from '../actions/hydration.actions';
import { SharedService } from 'src/app/services/shared.service';

@Injectable()
export class HydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() => {
    return this.action$.pipe(
      ofType(HydrationActions.hydrate),
      switchMap(() => this.sharedService.getFromStorage('appState')),
      map((storageValue) => {
        if (storageValue) {
          const state = JSON.parse(storageValue);
          return HydrationActions.hydrateSuccess({ state });
        }
        return HydrationActions.hydrateFailure();
      })
    );
  }
  );

  serialize$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(HydrationActions.hydrateSuccess, HydrationActions.hydrateFailure),
        switchMap(() => this.store),
        distinctUntilChanged(),
        switchMap((store: State) => this.sharedService.setToStorage('appState', JSON.stringify({
          players: store.players,
          rounds: store.rounds,
          roundMembers: store.roundMembers,
        }))),
      );
    },
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private store: Store,
    private sharedService: SharedService,
  ) { }

  ngrxOnInitEffects(): Action {
    return HydrationActions.hydrate();
  }
}
