import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { RoundMember } from '../../interfaces';

export const loadRoundMembers = createAction(
  '[RoundMember/API] Load RoundMembers',
  props<{ roundMembers: RoundMember[] }>()
);

export const addRoundMember = createAction(
  '[RoundMember/API] Add RoundMember',
  props<{ roundMember: RoundMember }>()
);

export const upsertRoundMember = createAction(
  '[RoundMember/API] Upsert RoundMember',
  props<{ roundMember: RoundMember }>()
);

export const addRoundMembers = createAction(
  '[RoundMember/API] Add RoundMembers',
  props<{ roundMembers: RoundMember[] }>()
);

export const upsertRoundMembers = createAction(
  '[RoundMember/API] Upsert RoundMembers',
  props<{ roundMembers: RoundMember[] }>()
);

export const updateRoundMember = createAction(
  '[RoundMember/API] Update RoundMember',
  props<{ roundMember: Update<RoundMember> }>()
);

export const updateRoundMembers = createAction(
  '[RoundMember/API] Update RoundMembers',
  props<{ roundMembers: Update<RoundMember>[] }>()
);

export const deleteRoundMember = createAction(
  '[RoundMember/API] Delete RoundMember',
  props<{ id: string }>()
);

export const deleteRoundMembers = createAction(
  '[RoundMember/API] Delete RoundMembers',
  props<{ ids: string[] }>()
);

export const clearRoundMembers = createAction(
  '[RoundMember/API] Clear RoundMembers'
);
