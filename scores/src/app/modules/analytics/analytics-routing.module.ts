import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsPage } from './analytics.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsPage,
    children: [

      {
        path: 'train',
        loadChildren: () => import('./train/train.module').then(m => m.TrainPageModule)
      },

      {
        path: '',
        redirectTo: 'train',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPageRoutingModule {}
