import { createAction, props, union } from '@ngrx/store';
import { IGamer } from 'src/app/interfaces';

export enum AnalyticsActionTypes {
  getRaitingByWinsType = 'analytics/raitingByWins',
  getRaitingByWinsToGamesType = 'analytics/raitingByWinsToGames',
  getRaitingSuccessType = 'analytics/getRaitingSuccess',
  addManyType = 'analytics/addMany',

  errorType = 'analytics/error',
  loadingType = 'analytics/loading',
}

export const getRaitingByWins = createAction(
  AnalyticsActionTypes.getRaitingByWinsType,
  props<{
    gameType: string;
    query?: any;
  }>()
);

export const getRaitingByWinsToGames = createAction(
  AnalyticsActionTypes.getRaitingByWinsToGamesType,
  props<{
    gameType: string;
    query?: any;
  }>()
);

export const getRaitingSuccess = createAction(
  AnalyticsActionTypes.getRaitingSuccessType,
  props<{ analytics: IGamer[] }>()
);

export const addMany = createAction(
  AnalyticsActionTypes.addManyType,
  props<{ analytics: IGamer[] }>()
);

export const error = createAction(
  AnalyticsActionTypes.errorType,
  props<{ error: string | null}>()
);

export const loading = createAction(
  AnalyticsActionTypes.loadingType,
  props<{ loading: boolean }>()
);

const all = union({
  error,
  getRaitingByWins,
  getRaitingByWinsToGames,
  getRaitingSuccess,
  loading,
});

export type CoreActionsUnion = typeof all;
