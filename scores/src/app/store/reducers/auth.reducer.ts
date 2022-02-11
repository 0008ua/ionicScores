import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../interfaces';
import * as fromAuthActions from '../actions/auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: IUser;
  error: any;
  redirectionUrl: string;
}

export const initialState: AuthState = {
  user: null,
  error: null,
  redirectionUrl: null,
};

export const reducer = createReducer(
  initialState,
  // on(fromAuthActions.storeTokenSuccess,
  //   (state, { token }): AuthState => ({
  //     ...state,
  //     token,
  //   })
  // ),
  on(fromAuthActions.storeUserFromTokenSuccess,
    (state, { user }): AuthState => ({
      ...state,
      user,
      redirectionUrl: '/games',
      // redirectionUrl: user.role === 'member' ? '/auth/profile' : '/games',
      error: null,
    })
  ),
  // on(fromAuthActions.logout,
  //   (state): AuthState => ({
  //     ...state,
  //     redirectionUrl: '/auth/signin',
  //   })
  // ),
  on(fromAuthActions.authError,
    (state, { error }): AuthState => ({
      ...state,
      error,
    })
  ),
  on(fromAuthActions.redirection,
    (state, { redirectionUrl }): AuthState => ({
      ...state,
      redirectionUrl,
    })
  ),
);


const selectFeature = createFeatureSelector<AuthState>(authFeatureKey);

export const selectUser = createSelector(selectFeature, (state) => state.user);
export const selectUserRole = createSelector(selectFeature, (state) => state.user.role);
export const selectRedirectionUrl = createSelector(selectFeature, (state) => state.redirectionUrl);
