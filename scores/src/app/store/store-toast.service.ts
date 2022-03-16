import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';

import { filter } from 'rxjs/operators';
import { EntityAction, ofEntityOp, OP_ERROR, OP_SUCCESS, EntityCacheAction } from '@ngrx/data';
import { ToastController } from '@ionic/angular';
import * as fromAnalyticsActions from './actions/analytics.actions';
import * as fromAnalyticsReducer from './reducers/analytics.reducer';
import { AnalyticsActionTypes } from './actions/analytics.actions';
import * as fromAuthActions from './actions/auth.actions';
import { Action, Store } from '@ngrx/store';
import { OperatorFunction } from 'rxjs';

/** Report ngrx-data success/error actions as toast messages **/
@Injectable({ providedIn: 'root' })
export class StoreToastService {
  constructor(
    private store: Store,
    private actions$: Actions,
    public toastController: ToastController
  ) {

    actions$
      .pipe(
        ofEntityOp(),
        filter(
          (ea: EntityAction) => ea.payload.entityOp.endsWith(OP_ERROR),
        ),
      )
      .subscribe((action) => {
        console.log('entity toast error', action);
        this.presentToast(`OP_ERROR - ${action.payload.data.error.message}`);
      });

    actions$
      .pipe(ofType(EntityCacheAction.SAVE_ENTITIES_ERROR))
      .subscribe((action) => {
        console.log('entity toast error', action);
        this.presentToast(`Error SAVE_ENTITIES_ERROR`);
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
            this.presentToast(fromAnalyticsActions, `${action.error}`);
            console.log('entity toast error', action);
            break;
          case fromAnalyticsActions.AnalyticsActionTypes.errorType:
            this.presentToast(fromAuthActions, `${action.error}`);
            console.log('entity toast error', action);
            break;
          default:
        }
      });
  }


  async presentToast(action, message = 'Error') {
    const toast = await this.toastController.create({
      header: 'Error',
      message,
      icon: 'bug-outline',
      position: 'top',
      duration: 3000,
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await toast.present();

    const { role, ...rest } = await toast.onDidDismiss();
    this.store.dispatch(action.error({ error: null }));
    console.log('onDidDismiss resolved with role', role);
  }
}
