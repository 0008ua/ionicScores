import { createReducer, on } from '@ngrx/store';
import * as fromAppActions from '../actions/app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const appFeatureKey = 'app';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(fromAppActions.loading,
    (state, { loading }): State => ({
      ...state,
      loading,
    })
  ),
);

const selectFeature = createFeatureSelector<State>(appFeatureKey);

export const selectLoading = createSelector(selectFeature, (state) => state.loading);
