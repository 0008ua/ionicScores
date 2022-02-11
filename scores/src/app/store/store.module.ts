import { NgModule } from '@angular/core';
import { DefaultDataServiceConfig, EntityDataModule, EntityDataService } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionReducer, MetaReducer, META_REDUCERS, StoreModule, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './reducers';

import { GameDataService } from './game-data.service';
import { GamerDataService } from './gamer-data.service';
import { entityMetadata } from './entity-metadata';
// import { EntityToastService } from './store-toast.service';
import { environment } from 'src/environments/environment';
import { AuthEffects } from './effects/auth.effects';
import { HttpClientModule } from '@angular/common/http';
;
import { InjectionToken } from '@angular/core';
import { AuthService } from '../modules/auth/auth.service';
import { SharedService } from '../services/shared.service';
import { HydrationEffects } from './effects/hydration.effects';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.host + 'api/store/',
  timeout: 3000,
  entityHttpResourceUrls: {
    game: {
      entityResourceUrl: environment.host + 'api/store/game/',
      collectionResourceUrl: environment.host + 'api/store/games/',
    },
    gamer: {
      entityResourceUrl: environment.host + 'api/store/gamer/',
      collectionResourceUrl: environment.host + 'api/store/gamers/',
    },
  },
};


// // token for the state keys.
// export const ROOT_STORAGE_KEYS = new InjectionToken<string[]>('StoreKeys');
// // token for the localStorage key.
// export const ROOT_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('appStorage');


// export const storageMetaReducer = (stateKeys: string[], localStorageKey: string, storageService: SharedService) => {
//   return (reducer: ActionReducer<any>): ActionReducer<any> => {
//     let init = true;

//     return (state, action) => {
//       const nextState = reducer(state, action);
//       // if (init) {
//       //   init = false;
//       //   console.log('state', state);
//       //   console.log('action', action);
//       //   return storageService.getFromStorage(localStorageKey)
//       //     .subscribe((savedState) => {
//       //       console.log('load', savedState)
//       //       // return { ...nextState, ...JSON.parse(savedState) };
//       //       return nextState;

//       //     }
//       //     );
//       //   // return { ...nextState, ...savedState };
//       // } else {
//       //   console.log('next', action);
//       //   const pick = (obj: object, keys: string[]) => keys.reduce((o, k) => (o[k] = obj[k], o), {});

//       //   // }
//       //   const stateToSave = pick(nextState, stateKeys);
//       //   storageService.setToStorage(localStorageKey, JSON.stringify(stateToSave));
//         return nextState;
//       // }
//       // console.log('reducer', reducer(state, action))


//     };
//   };
// };

// // factory meta-reducer configuration function
// export const getMetaReducers = (stateKeys: string[],
//   localStorageKey: string,
//   storageService: SharedService,
// ): MetaReducer<any>[] => {
//   return [storageMetaReducer(stateKeys, localStorageKey, storageService)];
// };


@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      AuthEffects,
      HydrationEffects,
    ]),
    EntityDataModule.forRoot({ entityMetadata }),
  ],
  providers: [
    GameDataService,
    GamerDataService,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },

    // { provide: ROOT_STORAGE_KEYS, useValue: ['players'] },
    // { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__' },
    // {
    //   provide: USER_PROVIDED_META_REDUCERS,
    //   deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, SharedService],
    //   useFactory: getMetaReducers
    // },
  ],
})


export class AppStoreModule {
  constructor(
    entityDataService: EntityDataService,
    gameDataService: GameDataService,
    gamerDataService: GamerDataService,
    // entityToastService: EntityToastService,
  ) {
    entityDataService.registerService('Game', gameDataService);
    entityDataService.registerService('Gamer', gamerDataService);
  }
}

