import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';

import { filter } from 'rxjs/operators';
import { EntityAction, ofEntityOp, OP_ERROR, OP_SUCCESS, EntityCacheAction } from '@ngrx/data';
import * as fromAnalyticsActions from './actions/analytics.actions';
import * as fromAuthActions from './actions/auth.actions';
import { Action, Store } from '@ngrx/store';
import { ToastService } from '../services/toast.service';

/** Report ngrx-data success/error actions as toast messages **/
@Injectable({ providedIn: 'root' })
export class StoreErrorService {
  constructor(
    private store: Store,
    private actions$: Actions,
    public toastService: ToastService,
  ) {
    actions$
      .pipe(
        ofEntityOp(),
        filter(
          (ea: EntityAction) => ea.payload.entityOp.endsWith(OP_ERROR),
        ),
      )
      .subscribe((action) => {
        this.store.dispatch(fromAuthActions.error({ error: action.payload.data.error.message }))
        // console.log('entity toast op error', action.payload.data.error.message);
        // this.presentToast(`OP_ERROR - ${action.payload.data.error.message}`);
      });

    actions$
      .pipe(ofType(EntityCacheAction.SAVE_ENTITIES_ERROR))
      .subscribe((action) => {
        console.log('entity save toast error', action);
        this.toastService.presentToast(`Error SAVE_ENTITIES_ERROR`);
      });

    actions$
      .pipe(
        ofType(
          fromAnalyticsActions.error,
          fromAuthActions.error
        ))
      .subscribe((action) => {
        console.log(action);
        if (!action.error) {
          return;
        }
        switch (action.type) {
          case fromAnalyticsActions.AnalyticsActionTypes.errorType:
            this.toastService.presentToast(`${action.error}`, fromAnalyticsActions.error);
            console.log('entity toast error AnalyticsActionTypes', action);
            break;
          case fromAuthActions.AuthActionTypes.errorType:
            this.toastService.presentToast(`${action.error}`, fromAuthActions.error);
            console.log('entity toast error AuthActionTypes', action);
            break;
          default:
        }
      });
  }
}
