import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: 'likes-manual', loadChildren: './likes-manual/likes-manual.module#LikesManualPageModule' },
  { path: 'getting-likes', loadChildren: './getting-likes/getting-likes.module#GettingLikesPageModule' },
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
export class LikesRoutingModule { }
