import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../modules/auth/auth.guard';
import { NoAuthGuard } from '../modules/auth/no-auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('../modules/analytics/analytics.module').then(m => m.AnalyticsPageModule),
        // canLoad: [NoAuthGuard],
        // canActivate: [NoAuthGuard],
      },
      {
        path: 'games',
        loadChildren: () => import('../modules/games/games.module').then(m => m.GamesPageModule),
        // canLoad: [AuthGuard],
        // canActivate: [AuthGuard],
      },

      {
        path: 'auth',
        loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule),
        // canLoad: [NoAuthGuard],
        // canActivate: [NoAuthGuard],
      },
      {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '',
        // pathMatch: 'full'
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
