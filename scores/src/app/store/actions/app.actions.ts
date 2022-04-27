import { createAction, props, union } from '@ngrx/store';
import { Round, RoundMember, GameType } from 'src/app/interfaces';

export enum AppActionTypes {
  loadingType = 'app/loading',
  clearGameType = 'app/clearGame',
  loadGameType = 'app/loadGame',
  gameTypeType = 'app/gameType',
  nopType = 'app/nopType',
}


export const loading = createAction(
  AppActionTypes.loadingType,
  props<{ loading: boolean }>()
);

export const clearGame = createAction(
  AppActionTypes.clearGameType,
);

export const loadGame = createAction(
  AppActionTypes.loadGameType,
  props<{ roundMembers: RoundMember[]; rounds: Round[] }>()
);

export const gameType = createAction(
  AppActionTypes.gameTypeType,
  props<{ gameType: GameType }>()
);

export const nop = createAction(
  AppActionTypes.nopType,
);

const all = union({
  loading,
  clearGame,
  loadGame,
  gameType,
  nop,
});

export type CoreActionsUnion = typeof all;
