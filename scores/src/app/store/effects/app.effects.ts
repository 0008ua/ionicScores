import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import * as fromAnalyticsActions from '../actions/analytics.actions';
import * as fromAuthActions from '../actions/auth.actions';
import * as fromRoundActions from '../actions/round.actions';
import * as fromRoundMemberActions from '../actions/round-member.actions';
import * as fromAppActions from '../actions/app.actions';
import * as fromPlayerActions from '../actions/player.actions';
import { routerNavigatedAction } from '@ngrx/router-store';

import * as fromAppReducer from '../reducers/app.reducer';
import * as fromPlayerReducer from '../reducers/player.reducer';
import * as fromPersistStoreReducer from '../reducers/persist-store.reducer';

import { GameType } from 'src/app/interfaces';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

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
            concatLatestFrom(() => this.store.select(fromAppReducer.selectGameType)),
            map(([{ payload }, gameType]) => {
                const { urlAfterRedirects } = payload.event;
                const payloadGameType = urlAfterRedirects.split('/');
                if (payloadGameType[1] === 'games' || payloadGameType[1] === 'analytics') {
                    if (!gameType) {
                        // initial state, get gameType from url
                        return fromAppActions.gameType({ gameType: payloadGameType[2] as GameType });
                    }
                    if (payloadGameType[2] !== gameType) {
                        // fire action only if game was changed
                        // change game type and clear previous game
                        return fromAppActions.gameTypeAndClearGame({ gameType: payloadGameType[2] as GameType });
                    }
                }
                return fromAppActions.nop();
            }),
        );
    });

    clearGame = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAppActions.gameTypeAndClearGame),
            map(() =>fromAppActions.clearGame()),
        );
    });

    clearRounds = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAppActions.clearGame),
            map((_) => fromRoundActions.clearRounds()),
        );
    });

    loadRounds = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAppActions.loadGame),
            map(({ rounds }) => fromRoundActions.loadRounds({ rounds })),
        );
    });

    clearRoundMembers = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAppActions.clearGame),
            map((_) => fromRoundMemberActions.clearRoundMembers()),
        );
    });

    loadRoundMembers = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAppActions.loadGame),
            map(({ roundMembers }) => fromRoundMemberActions.loadRoundMembers({ roundMembers })),
        );
    });

    constructor(
        private actions$: Actions<fromAppActions.CoreActionsUnion>,
        private store: Store,
    ) { }
}
