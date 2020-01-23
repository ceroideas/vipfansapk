import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SelectMagnetismPage } from '../../pages/magnetism/select-magnetism/select-magnetism.page';
import { SelectMagnetismMessageModalPage } from '../../pages/magnetism/select-magnetism-message-modal/select-magnetism-message-modal.page';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';

@NgModule({
  declarations: [SelectMagnetismPage, SelectMagnetismMessageModalPage, HeaderComponent],
  entryComponents: [SelectMagnetismPage, SelectMagnetismMessageModalPage],
  exports: [HeaderComponent],
  imports: [
  	CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
})
export class HeaderModule { }
