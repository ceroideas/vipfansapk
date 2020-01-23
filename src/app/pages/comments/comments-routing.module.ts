import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: 'comments-manual', loadChildren: './comments-manual/comments-manual.module#CommentsManualPageModule' },
  { path: 'getting-comments', loadChildren: './getting-comments/getting-comments.module#GettingCommentsPageModule' },
  { path: 'send-comments', loadChildren: './send-comments/send-comments.module#SendCommentsPageModule' },
  { path: 'comments-template', loadChildren: './comments-template/comments-template.module#CommentsTemplatePageModule' },
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
export class CommentsRoutingModule { }
