import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RummyPage } from './rummy.page';

const routes: Routes = [
  {
    path: '',
    component: RummyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RummyPageRoutingModule {}
