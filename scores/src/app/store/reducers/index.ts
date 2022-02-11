import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { AuthService } from 'src/app/modules/auth/auth.service';

import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromRounds from './round.reducer';
import { hydrationMetaReducer } from './hydration.reducer';
import * as fromPlayers from './player.reducer';

export interface State {
  auth: fromAuth.AuthState;
  rounds: fromRounds.State;
  players: fromPlayers.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  rounds: fromRounds.reducer,
  players: fromPlayers.reducer,
};



// let init = true;
// export const debug = (reducer: ActionReducer<any>): ActionReducer<any> => {
//   return (state, action) => {
//     // if (init) {
//       console.log('state', state);
//       console.log('action', action);
//     // }

//     init = false;
//     return reducer(state, action);
//   };
// }

export const metaReducers: MetaReducer<State>[] = !environment.production ? [hydrationMetaReducer] : [hydrationMetaReducer];




