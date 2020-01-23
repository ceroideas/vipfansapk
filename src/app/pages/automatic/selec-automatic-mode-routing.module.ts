import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'selec-automatic-mode', loadChildren: './selec-automatic-mode/selec-automatic-mode.module#SelecAutomaticModePageModule' }
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
export class SelecAutomaticModeRoutingModule { }
