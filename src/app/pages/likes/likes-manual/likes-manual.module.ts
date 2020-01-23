import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LikesManualPage } from './likes-manual.page';
import { HiddenPipe } from '../../../pipes/hidden.pipe';
import { VipPipe } from '../../../pipes/vip/vip.pipe';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../../app.module';

const routes: Routes = [
  {
    path: '',
    component: LikesManualPage
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
  declarations: [LikesManualPage,HiddenPipe,VipPipe],
  exports: [HiddenPipe,VipPipe]
})
export class LikesManualPageModule {}
