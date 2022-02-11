import { Action, createAction, props, union } from '@ngrx/store';
import { IUser } from 'src/app/interfaces';

export enum AuthActionTypes {
  storeToken = 'auth/storeToken',
  storeTokenSuccess = 'auth/storeTokenSuccess',

  storeUserFromToken = 'auth/storeUserFromToken',
  storeUserFromTokenSuccess = 'auth/storeUserFromTokenSuccess',

  signin = 'auth/signin',
  signinSuccess = 'auth/signinSuccess',
  signup = 'auth/signup',

  logout = 'auth/logout',

  redirection = 'auth/redirection',

  authError = 'auth/authError',
}

export const storeToken = createAction(
  AuthActionTypes.storeToken,
  props<{ token: string }>()
);

// export const storeTokenSuccess = createAction(
//   AuthActionTypes.storeToken,
//   props<{ token: string }>()
// );

export const storeUserFromToken = createAction(
  AuthActionTypes.storeUserFromToken,
);

export const storeUserFromTokenSuccess = createAction(
  AuthActionTypes.storeUserFromTokenSuccess,
  props<{ user: IUser }>()
);

export const signin = createAction(
  AuthActionTypes.signin,
  props<{ user: IUser }>()
);

export const signinSuccess = createAction(
  AuthActionTypes.signinSuccess,
  props<{ token: string }>()
);

export const signup = createAction(
  AuthActionTypes.signup,
  props<{ user?: IUser }>()
);

export const logout = createAction(
  AuthActionTypes.logout,
);

export const redirection = createAction(
  AuthActionTypes.redirection,
  props<{ redirectionUrl: string | null }>()
);

export const authError = createAction(
  AuthActionTypes.authError,
  props<{ error: any }>()
);

const all = union({
  storeToken,
  // storeTokenSuccess,
  storeUserFromToken,
  storeUserFromTokenSuccess,
  signin,
  signup,
  authError,
  redirection,
  logout,
});

export type CoreActionsUnion = typeof all;
