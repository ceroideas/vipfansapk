import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: 'analyzing01', loadChildren: './analyzing01/analyzing01.module#Analyzing01PageModule' },
  { path: 'analyzing02', loadChildren: './analyzing02/analyzing02.module#Analyzing02PageModule' },
  { path: 'form01', loadChildren: './form01/form01.module#Form01PageModule' },
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
export class FormsRoutingModule { }
