import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage,
    children: [
      {
        path: ':id',
        loadChildren: () => import('./game/game.module').then(m => m.GamePageModule)
      },
      // {
      //   path: 'train',
      //   loadChildren: () => import('./train/train.module').then(m => m.TrainPageModule)
      // },
      // {
      //   path: 'uno',
      //   loadChildren: () => import('./uno/uno.module').then(m => m.UnoPageModule)
      // },
      // {
      //   path: 'cards',
      //   loadChildren: () => import('./cards/cards.module').then(m => m.CardsPageModule)
      // },
      // {
      //   path: '',
      //   redirectTo: 'uno',
      //   pathMatch: 'full',
      // },
      {
        path: '**',
        redirectTo: 'rummy',
      },
    ],
  },
  // {
  //   path: 'game',
  //   loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  // },

  // {
  //   path: '**',
  //   redirectTo: '',
  // },

  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'train-rounds',
  //   loadChildren: () => import('./train/train-rounds/train-rounds.module').then( m => m.TrainRoundsPageModule)
  // },
  // {
  //   path: 'choose-players',
  //   loadChildren: () => import('./choose-players/choose-players.module').then( m => m.ChoosePlayersPageModule)
  // },
  // {
  //   path: 'create-gamer',
  //   loadChildren: () => import('./create-gamer/create-gamer.module').then( m => m.CreateGamerPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule { }
