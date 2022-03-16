import { createReducer, on } from '@ngrx/store';
import { IGamer } from '../../interfaces';
import * as fromAnalyticsActions from '../actions/analytics.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const analyticsFeatureKey = 'analytics';

export interface State {
  analytics: IGamer[];
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  analytics: [],
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(fromAnalyticsActions.getRaitingByWins,
    (state): State => ({
      ...state,
      loading: true,
    })
  ),
  on(fromAnalyticsActions.getRaitingSuccess,
    (state, { analytics }): State => ({
      ...state,
      analytics,
      error: null,
      loading: false,
    })
  ),
  on(fromAnalyticsActions.error,
    (state, { error }): State => ({
      ...state,
      error,
      loading: false,
    })
  ),
);

const selectFeature = createFeatureSelector<State>(analyticsFeatureKey);

export const selectRaiting = createSelector(selectFeature, (state) => state.analytics);
export const selectLoading = createSelector(selectFeature, (state) => state.loading);
