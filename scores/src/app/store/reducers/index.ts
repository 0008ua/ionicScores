import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { AuthService } from 'src/app/modules/auth/auth.service';

import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromRounds from './round.reducer';
import * as fromRoundMembers from './round-member.reducer';
import { hydrationMetaReducer } from './hydration.reducer';
import * as fromPlayers from './player.reducer';
import * as fromAnalytics from './analytics.reducer';
import * as fromApp from './app.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  auth: fromAuth.State;
  rounds: fromRounds.State;
  roundMembers: fromRoundMembers.State;
  players: fromPlayers.State;
  analytics: fromAnalytics.State;
  app: fromApp.State;
  router: typeof routerReducer;

}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  rounds: fromRounds.reducer,
  roundMembers: fromRoundMembers.reducer,
  players: fromPlayers.reducer,
  analytics: fromAnalytics.reducer,
  app: fromApp.reducer,
  router: routerReducer,

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [hydrationMetaReducer] : [hydrationMetaReducer];




