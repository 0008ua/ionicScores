import { createAction, props, union } from '@ngrx/store';

export enum AppActionTypes {
  loadingType = 'app/loading',
}

export const loading = createAction(
  AppActionTypes.loadingType,
  props<{ loading: boolean }>()
);

const all = union({
  loading,
});

export type CoreActionsUnion = typeof all;
