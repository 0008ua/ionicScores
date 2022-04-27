import { createReducer, on } from '@ngrx/store';
import * as fromAppActions from '../actions/app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameType } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

export const appFeatureKey = 'app';

export interface State {
  loading: boolean;
  gameType: GameType;
}

export const initialState: State = {
  loading: false,
  gameType: Object.keys(environment.games)[0] as GameType,
};

export const reducer = createReducer(
  initialState,
  on(fromAppActions.loading,
    (state, { loading }): State => ({
      ...state,
      loading,
    })
  ),
  on(fromAppActions.gameType,
    (state, { gameType }): State => ({
      ...state,
      gameType,
    })
  ),
);

const selectFeature = createFeatureSelector<State>(appFeatureKey);

export const selectLoading = createSelector(selectFeature, (state) => state.loading);
export const selectGameType = createSelector(selectFeature, (state) => state.gameType);
