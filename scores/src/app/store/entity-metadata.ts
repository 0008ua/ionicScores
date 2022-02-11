import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IGamer } from '../interfaces';

export const entityMetadata: EntityMetadataMap = {
  // player: {
  //   selectId: (player) => player._id,
  //   entityDispatcherOptions: {
  //     optimisticAdd: false,
  //     optimisticUpdate: false,
  //     optimisticDelete: false,
  //   },
  // },
  // recentPlayer: {
  //   selectId: (recentPlayer) => recentPlayer._id,
  //   entityDispatcherOptions: {
  //     optimisticAdd: false,
  //     optimisticUpdate: false,
  //     optimisticDelete: false,
  //   },
  // },
  // gamePlay: {
  //   selectId: (gamePlay) => gamePlay._id,
  //   entityDispatcherOptions: {
  //     optimisticAdd: false,
  //     optimisticUpdate: false,
  //     optimisticDelete: false,
  //   },
  // },
  gamer: {
    selectId: (gamer) => gamer._id,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticUpdate: false,
      optimisticDelete: false,
    },
  },
  game: {
    selectId: (game) => game._id,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticUpdate: false,
      optimisticDelete: false,
    },
  },
};

const pluralNames = {
  // player: 'players',
  // recentPlayer: 'recentPlayers',
  // gamePlay: 'gamePlays',
  gamer: 'gamers',
  game: 'games',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
