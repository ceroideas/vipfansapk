import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: 'videos-manual', loadChildren: './videos-manual/videos-manual.module#VideosManualPageModule' },
  { path: 'getting-videos', loadChildren: './getting-videos/getting-videos.module#GettingVideosPageModule' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class VideosRoutingModule { }
