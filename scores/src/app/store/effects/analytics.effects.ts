import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap, mergeMap, filter, withLatestFrom } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
import { SharedService } from 'src/app/services/shared.service';
import * as fromAnalyticsActions from '../actions/analytics.actions';
import { Store } from '@ngrx/store';
import { GamerService } from '../gamer-data.service';
import { IGamer } from 'src/app/interfaces';


@Injectable()
export class AnalyticsEffects {
    setLoading = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRatingByWins, fromAnalyticsActions.getRatingByWinsToGames),
            map((_) => fromAnalyticsActions.loading({ loading: true })),
        );
    });

    cancelLoading = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRatingSuccess, fromAnalyticsActions.error),
            filter((action) =>
                // ignore error cancelling (null) actions
                action.type !== fromAnalyticsActions.AnalyticsActionTypes.errorType ||
                (action.type === fromAnalyticsActions.AnalyticsActionTypes.errorType && !!(action.error))
            ),
            map((_) => fromAnalyticsActions.loading({ loading: false })),
        );
    });

    getRatingByWins = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRatingByWins),
            switchMap(() => this.sharedService.getRatingByWins().pipe(
                switchMap((result) => this.addLoosers(of(result))),
                map((analytics) => fromAnalyticsActions.getRatingSuccess({ analytics })),
                catchError((error) => of(fromAnalyticsActions.error({ error: error.error.message || 'error' }))),
            ))
        );
    });

    getRatingByWinsToGames = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRatingByWinsToGames),
            switchMap(() => this.sharedService.getRatingByWinsToGames().pipe(
                map((analytics) => fromAnalyticsActions.getRatingSuccess({ analytics })),
                catchError((error) => of(fromAnalyticsActions.error({ error: error.error.message || 'error' }))),
            ))
        );
    });

    getRating = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAnalyticsActions.getRating),
            switchMap(() => this.sharedService.getRating().pipe(
                map((analytics) => fromAnalyticsActions.getRatingSuccess({ analytics })),
                catchError((error) => of(fromAnalyticsActions.error({ error: error.error.message || 'error' }))),
            ))
        );
    });

    constructor(
        private actions$: Actions<fromAuthActions.CoreActionsUnion>,
        private sharedService: SharedService,
        private gamerService: GamerService,
    ) { }

    // append gamers which hasn't wins yet
    addLoosers(stream: Observable<IGamer[]>): Observable<IGamer[]> {
        return stream.pipe(
            withLatestFrom(this.gamerService.entities$),
            map(([analytics, gamers]) => {
                const losers = gamers
                    .filter((gamer) => !analytics.some((winner) => winner._id === gamer._id))
                    .map(({ _id, name, color }) => ({
                        _id,
                        name,
                        color,
                        rating: { wins: 0 }
                    }));
                const fullList = analytics.concat(losers);
                return fullList;
            }),
        );
    }
}
