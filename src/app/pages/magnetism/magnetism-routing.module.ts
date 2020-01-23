import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: 'exchange_magnetism', loadChildren: './exchange-magnetism/exchange-magnetism.module#ExchangeMagnetismPageModule' },
  { path: 'magnetism', loadChildren: './magnetism/magnetism.module#MagnetismPageModule' },
  { path: 'transfer_magnetism', loadChildren: './transfer-magnetism/transfer-magnetism.module#TransferMagnetismPageModule' },
  { path: 'become_premium', loadChildren: './become-premium/become-premium.module#BecomePremiumPageModule' },  { path: 'select-magnetism', loadChildren: './select-magnetism/select-magnetism.module#SelectMagnetismPageModule' },
  {
    path: 'transfer-magnetism-modal',
    loadChildren: () => import('./transfer-magnetism-modal/transfer-magnetism-modal.module').then( m => m.TransferMagnetismModalPageModule)
  },
  {
    path: 'select-magnetism-message-modal',
    loadChildren: () => import('./select-magnetism-message-modal/select-magnetism-message-modal.module').then( m => m.SelectMagnetismMessageModalPageModule)
  }

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
export class MagnetismRoutingModule { }
