import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import * as fromAnalyticsActions from '../actions/analytics.actions';
import * as fromAuthActions from '../actions/auth.actions';
import * as fromRoundActions from '../actions/round.actions';
import * as fromAppActions from '../actions/app.actions';
import { routerNavigatedAction } from '@ngrx/router-store';
import { GameType } from 'src/app/interfaces';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
    setLoading = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.loading, fromAuthActions.loading),
            map((action) => fromAppActions.loading({ loading: action.loading }))
        );
    });

    cancelLoading = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromRoundActions.clearRounds),
            map((_) => fromAppActions.loading({ loading: false })),
        );
    });

    gameType = createEffect(() => {
        return this.actions$.pipe(
            ofType(routerNavigatedAction),
            map(({ payload }) => {
                const { urlAfterRedirects } = payload.event;
                const gameType = urlAfterRedirects.split('/');
                if (gameType[1] === 'games' || gameType[1] === 'analytics') {
                    return fromAppActions.gameType({ gameType: gameType[2] as GameType });
                }
                return fromAppActions.nop();
            }),
        );
    });

    constructor(
        private actions$: Actions<fromAppActions.CoreActionsUnion>,
        // private actions$: Actions<fromRoundActions.CoreActionsUnion>,
    ) { }
}
