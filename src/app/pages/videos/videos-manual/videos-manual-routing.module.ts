import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosManualPage } from './videos-manual.page';

const routes: Routes = [
  {
    path: '',
    component: VideosManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosManualPageRoutingModule {}
