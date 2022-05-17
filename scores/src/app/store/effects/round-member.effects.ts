import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as fromRoundMemberActions from '../actions/round-member.actions';
import * as fromAppActions from '../actions/app.actions';
import * as fromPersistStoreReducer from '../reducers/persist-store.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RoundMemberEffects {
    // clearGame = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAppActions.clearGame),
    //         map((_) => fromRoundMemberActions.clearRoundMembers()),
    //     );
    // });

    // loadGame = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAppActions.loadGame),
    //         map(({roundMembers}) => fromRoundMemberActions.loadRoundMembers({roundMembers})),
    //     );
    // });

    constructor(
        private actions$: Actions<fromRoundMemberActions.CoreActionsUnion>,
        private store: Store,
    ) { }
}
