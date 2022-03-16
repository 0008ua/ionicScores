import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';

import { filter } from 'rxjs/operators';
import { EntityAction, ofEntityOp, OP_ERROR, OP_SUCCESS, EntityCacheAction } from '@ngrx/data';
import { ToastController } from '@ionic/angular';
import * as fromAnalyticsActions from './actions/analytics.actions';
import * as fromAppActions from './actions/app.actions';
import * as fromAppReducer from './reducers/app.reducer';
import * as fromAnalyticsReducer from './reducers/analytics.reducer';
import { AnalyticsActionTypes } from './actions/analytics.actions';
import * as fromAuthActions from './actions/auth.actions';
import { Action, Store } from '@ngrx/store';
import { OperatorFunction } from 'rxjs';

/** Report ngrx-data success/error actions as toast messages **/
@Injectable({ providedIn: 'root' })
export class StoreAppService {
  constructor(
    private store: Store,
    private actions$: Actions,
  ) {
    // actions$
    //   .pipe(
    //     ofEntityOp(),
    //     filter(
    //       (ea: EntityAction) => ea.payload.entityOp.endsWith(OP_ERROR),
    //     ),
    //   )
    //   .subscribe((action) => {
    //     console.log('entity toast error', action);
    //     this.presentToast(`OP_ERROR - ${action.payload.data.error.message}`);
    //   });

    // actions$
    //   .pipe(ofType(EntityCacheAction.SAVE_ENTITIES_ERROR))
    //   .subscribe((action) => {
    //     console.log('entity toast error', action);
    //     this.presentToast(`Error SAVE_ENTITIES_ERROR`);
    //   });

    actions$
      .pipe(ofType(fromAnalyticsActions.loading, fromAuthActions.loading))
      .subscribe((action) => {
        this.store.dispatch(fromAppActions.loading({ loading: action.loading }));
      });

    // const loading$ = store.select(fromAnalyticsReducer.selectLoading);
    // loading$.subscribe((loading) => {
    //   this.store.dispatch(fromAppActions.loading({ loading }));
    // });
  }
}
