import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: 'followers-manual', loadChildren: './followers-manual/followers-manual.module#FollowersManualPageModule' },
  { path: 'getting-followers', loadChildren: './getting-followers/getting-followers.module#GettingFollowersPageModule' },
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
export class FollowersRoutingModule { }
