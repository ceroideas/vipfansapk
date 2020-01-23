import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExchangeMagnetismPage } from '../exchange-magnetism/exchange-magnetism.page';
import { MagnetismPage } from './magnetism.page';
// import { SelectMagnetismPage } from '../select-magnetism/select-magnetism.page';
// import { SelectMagnetismMessageModalPage } from '../select-magnetism-message-modal/select-magnetism-message-modal.page';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../../app.module';

import { ModalController } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: MagnetismPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  declarations: [ExchangeMagnetismPage, MagnetismPage/*, SelectMagnetismPage, SelectMagnetismMessageModalPage*/],
  entryComponents: [ExchangeMagnetismPage/*, SelectMagnetismPage, SelectMagnetismMessageModalPage*/],
})
export class MagnetismPageModule {}
