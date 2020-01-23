import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMagnetismMessageModalPage } from './select-magnetism-message-modal.page';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../../app.module';

const routes: Routes = [
  {
    path: '',
    component: SelectMagnetismMessageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  	TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports: [RouterModule],
})
export class SelectMagnetismMessageModalPageRoutingModule {}
