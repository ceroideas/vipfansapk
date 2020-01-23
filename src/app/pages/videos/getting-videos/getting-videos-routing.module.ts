import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingVideosPage } from './getting-videos.page';

const routes: Routes = [
  {
    path: '',
    component: GettingVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingVideosPageRoutingModule {}
