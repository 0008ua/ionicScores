import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap, mergeMap, filter } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
import { SharedService } from 'src/app/services/shared.service';
import * as fromAnalyticsActions from '../actions/analytics.actions';


@Injectable()
export class AnalyticsEffects {
    setLoading = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRaitingByWins, fromAnalyticsActions.getRaitingByWinsToGames),
            map((_) => fromAnalyticsActions.loading({ loading: true })),
        );
    });

    cancelLoading = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRaitingSuccess, fromAnalyticsActions.error),
            filter((action) =>
                // ignore error cancelling (null) actions
                action.type !== fromAnalyticsActions.AnalyticsActionTypes.errorType ||
                (action.type === fromAnalyticsActions.AnalyticsActionTypes.errorType && !!(action.error))
            ),
            map((_) => fromAnalyticsActions.loading({ loading: false })),
        );
    });

    getRaitingByWins = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRaitingByWins),
            switchMap(() => this.sharedService.getRaitingByWins().pipe(
                map((analytics) => fromAnalyticsActions.getRaitingSuccess({ analytics })),
                catchError((error) => of(fromAnalyticsActions.error({ error: error.error.message || 'error' }))),
            ))
        );
    });

    getRaitingByWinsToGames = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRaitingByWinsToGames),
            switchMap(() => this.sharedService.getRaitingByWinsToGames().pipe(
                map((analytics) => fromAnalyticsActions.getRaitingSuccess({ analytics })),
                catchError((error) => of(fromAnalyticsActions.error({ error: error.error.message || 'error' }))),
            ))
        );
    });

    constructor(
        private actions$: Actions<fromAuthActions.CoreActionsUnion>,
        private sharedService: SharedService,
    ) { }
}
