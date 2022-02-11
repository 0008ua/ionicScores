import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators';

import * as fromAuthActions from '../actions/auth.actions';
import * as fromRoundActions from '../actions/round.actions';
import * as fromPlayerActions from '../actions/player.actions';

import { AuthService } from '../../modules/auth/auth.service';
import { IUser } from 'src/app/interfaces';
import { userInfo } from 'os';
import { GamerService } from '../gamer-data.service';
import { EntityActionFactory, EntityOp, MergeStrategy } from '@ngrx/data';
import { SharedService } from 'src/app/services/shared.service';


@Injectable()
export class AuthEffects {
    signin = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.signin),
            map((action) => action.user),
            switchMap((user) => this.authService.signin(user).pipe(
                map((token) => fromAuthActions.storeToken({ token })),
                catchError((error) => of(fromAuthActions.authError({ error }))),
            ))
        );
    });

    signup = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.signup, fromAuthActions.logout),
            map((action = null) => {
                if ('user' in action) {
                    return action.user;
                }
                return null;
            }),
            switchMap((user) => this.authService.signup(user).pipe(
                map((token) => fromAuthActions.storeToken({ token })),
                catchError((error) => of(fromAuthActions.authError({ error }))),
            ))
        );
    });

    clearRounds = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.signup, fromAuthActions.signin, fromAuthActions.logout),
            map(() => fromRoundActions.clearRounds()),
            catchError((error) => of(fromAuthActions.authError({ error }))),
        );
    });

    clearPlayers = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.signup, fromAuthActions.logout),
            map(() => fromPlayerActions.clearPlayers()),
            catchError((error) => of(fromAuthActions.authError({ error }))),
        );
    });

    storeToken = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.storeToken),
            map((action) => action.token),
            switchMap((token) => this.sharedService.setToken(token)),
            // map(() => this.sharedService.removeFromStorage('appState')),
            map(() => fromAuthActions.storeUserFromToken()),
            catchError((error) => of(fromAuthActions.authError({ error }))),
        );
    });



    storeUserFromToken = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.storeUserFromToken),
            switchMap(() => of('_').pipe(
                switchMap(() => this.sharedService.decodeToken().pipe(
                    // catch decodeToken error and throw up
                    // this part of stream finishes
                    catchError((error) => throwError(error)),
                    // catch without throw keep running stream
                    // if no error store user
                    map((user) => fromAuthActions.storeUserFromTokenSuccess({ user })),
                )),
                // get decode token error
                // stream stay alive
                // store error
                catchError((error) => of(fromAuthActions.authError({ error })))
            ))
        );
    });

    getGamers = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.storeUserFromTokenSuccess),
            map((_) => this.entityActionFactory.create(
                'gamer', EntityOp.QUERY_LOAD, null, { tag: 'gamer/on storeUserFromToken',})),
            catchError((error) => of(fromAuthActions.authError({ error }))),
        );
    },
        // { dispatch: false }
    );

    getGames = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.storeUserFromTokenSuccess),
            map((_) => this.entityActionFactory.create(
                'game', EntityOp.QUERY_LOAD, null, { tag: 'game/on storeUserFromToken', })),
            catchError((error) => of(fromAuthActions.authError({ error }))),
        );
    },
        // { dispatch: false }
    );

    // getGamers = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAuthActions.storeUserFromTokenSuccess),
    //         map((_) => this.entityActionFactory.create('gamer', EntityOp.REMOVE_ALL)),
    //         map((_) => this.entityActionFactory.create('gamer', EntityOp.QUERY_ALL)),
    //         // map((_) => this.gamerService.getAll()),
    //         catchError((error) => of(fromAuthActions.authError({ error }))),
    //     );
    // },
    //     // { dispatch: false }
    // );

    removeAllRecentPlayers = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromAuthActions.signinSuccess),
            map((action) => action.token),
            map((token) => fromAuthActions.storeToken({ token })),
            catchError((error) => of(fromAuthActions.authError({ error }))),

            // switchMap((user) => this.authService.signin(user).pipe(
            //     switchMap((token) => [fromAuthActions.storeToken(token),
            //         //  recentPlayerActions.removeAll()
            //         ]),
            //     catchError((err) => [fromAuthActions.authError(err)]),
            // )),

        );
    });

    // redirect = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAuthActions.storeUserFromTokenSuccess),
    //         // map((action) => action.token),
    //         map((_) => fromAuthActions.redirection({ redirectionUrl: '/auth/profile' })),
    //         catchError((error) => of(fromAuthActions.authError({ error }))),
    //     );
    // });

    // logout = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAuthActions.logout),
    //         // map((action) => action.token),
    //         map((_) => fromAuthActions.redirection({ redirectionUrl: '/auth/signin' })),
    //         catchError((error) => of(fromAuthActions.authError({ error }))),
    //     );
    // });

    constructor(
        private actions$: Actions<fromAuthActions.CoreActionsUnion>,
        private authService: AuthService,
        private sharedService: SharedService,
        private entityActionFactory: EntityActionFactory,
    ) { }
}

// const signinEpic = (action$) => action$.pipe(
//     ofType(SIGNIN),
//     map((action) => action.payload),
//     switchMap((user) => authService.signin(user).pipe(
//         switchMap((token) => [storeToken(token), recentPlayerActions.removeAll()]),
//         catchError((err) => [authError(err)])
//     )),
// );

// const signupEpic = (action$) => action$.pipe(
//     ofType(SIGNUP, LOGOUT),
//     map((action) => action.payload),
//     switchMap((user) => authService.signup(user).pipe(
//         switchMap((token) => [storeToken(token), recentPlayerActions.removeAll()]),
//         catchError((err) => [authError(err)])
//     )),
// );

// const storeTokenEpic = (action$) => action$.pipe(
//     ofType(STORE_TOKEN),
//     map((action) => action.payload),
//     switchMap((payload) => {
//         return of(payload).pipe(
//             switchMap((token) => {
//                 helpersService.storeToken(token);
//                 return [storeTokenSuccess(token), storeUserFromToken()]
//             }),
//             catchError((err) => [authError(err)])
//         );
//     })
// );

// const storeUserFromTokenEpic = (action$) => action$.pipe(
//     ofType(STORE_USER_FROM_TOKEN),
//     switchMap(() => {
//         return of('_').pipe(
//             switchMap(() => {
//                 let user;
//                 try {
//                     user = helpersService.decodeToken();
//                 } catch (error) {
//                     return throwError(() => error);
//                 }
//                 return [storeUserFromTokenSuccess(user)];
//             }),
//             catchError((err) => [authError(err)])
//         );
//     })
// );

// @Injectable()
// export class UserEffects {
//     @Effect()
//     removeCompany: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.RemoveCompany),
//         switchMap((action) => this.userService.removeCompany()),
//         switchMap(() => [new fromUserActions.RemoveCompanySuccess(), new fromUserActions.LogoutOnFront()]),
//         catchError((err) => of(new fromUserActions.RemoveCompanyFail(err))),
//     );

//     @Effect()
//     loadLang: Observable<Action> = this.actions$
//         .pipe(
//             ofType(fromUserActions.UserActionTypes.LoadLang),
//             // map((action: LoadAppNav) => action.payload),
//             switchMap((_) => this.translate.onLangChange),
//             map((event: LangChangeEvent) => new fromUserActions.LoadLangSuccess(event.lang)),
//             catchError((err) => of(new fromUserActions.LoadLangFail(err))),
//         );

//     @Effect()
//     getUser: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.GetUser),
//         map((action: fromUserActions.GetUser) => action.payload),
//         switchMap((payload) => this.userService.getUser().pipe(
//             switchMap((user) => {
//                 let actions: Action[];
//                 if (user) {
//                     // User logged in
//                     actions = [new fromUserActions.Authenticated({ user }), new fromUserActions.GetCompanyByUser()];
//                 } else {
//                     // User not logged in
//                     actions = [new fromUserActions.NotAuthenticated()];
//                 }
//                 if (payload) {
//                     actions.push(new fromUserActions.Redirection({ redirectionUrl: payload }));
//                 }
//                 return actions;
//             }),
//             catchError((err) => [new fromUserActions.AuthError(), new fromUserActions.Logout()]),
//         )),
//     );

//     @Effect()
//     getCompanyByUser: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.GetCompanyByUser),
//         switchMap((payload) => this.userService.getCompanyByUser().pipe(
//             map((company) => {
//                 if (company) {
//                     return new fromUserActions.CompanyAuthenticated({ company });
//                 } else {
//                     // Did't get company -> Logout
//                     return new fromUserActions.Logout();
//                 }
//             }),
//             catchError((err) => [new fromUserActions.AuthError(), new fromUserActions.Logout()]),
//         )),
//     );

//     @Effect()
//     activateUser: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.ActivateUser),
//         map((action: fromUserActions.ActivateUser) => action.payload),
//         switchMap((payload) => this.userService.activateUser(payload).pipe(
//             map((token) => new fromUserActions.LoginSuccess({ token })),
//             catchError((err) => of(new fromUserActions.UpdateUserFail(err))),
//         )),
//     );

//     @Effect()
//     login: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.Login),
//         map((action: fromUserActions.Login) => action.payload),
//         switchMap((payload) => this.userService.login(payload.user).pipe(
//             map((token) => new fromUserActions.LoginSuccess({ token, redirectionUrl: '/' })),
//             catchError((err) => of(new fromUserActions.LoginFail(err))),
//         )),
//     );

//     @Effect()
//     updateUser: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.UpdateUser),
//         map((action: fromUserActions.UpdateUser) => action.payload),
//         switchMap((payload) => this.userService.updateUser(payload).pipe(
//             map((token) => new fromUserActions.LoginSuccess({ token })),
//             catchError((err) => of(new fromUserActions.UpdateUserFail(err))),

//         )),
//     );

//     @Effect()
//     loginSuccess: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.LoginSuccess),
//         map((action: fromUserActions.LoginSuccess) => action.payload),
//         switchMap((payload) => this.userService.setToken(payload.token).pipe(
//             map((_) => new fromUserActions.GetUser(payload.redirectionUrl ? payload.redirectionUrl : null)),
//             catchError((err) => of(new fromUserActions.AuthError())),
//         )),
//     );

//     @Effect()
//     logout: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.Logout),
//         switchMap(() => this.userService.logout().pipe(
//             switchMap(() => this.userService.removeToken()),
//             map((_) => new fromUserActions.GetUser('/user/login')),
//             catchError((err) => of(new fromUserActions.AuthError())),
//         )),
//     );

//     @Effect()
//     logoutOnFront: Observable<Action | Action[]> = this.actions$.pipe(
//         ofType(fromUserActions.UserActionTypes.LogoutOnFront),
//         switchMap(() => this.userService.removeToken().pipe(
//             map((_) => new fromUserActions.GetUser('/user/login')),
//             catchError((err) => of(new fromUserActions.AuthError())),
//         )),
//     );


//     constructor(
//         private actions$: Actions,
//         private userService: UserService,
//         private translate: TranslateService,
//     ) { }
// }
