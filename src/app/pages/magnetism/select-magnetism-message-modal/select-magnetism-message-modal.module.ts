import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMagnetismMessageModalPageRoutingModule } from './select-magnetism-message-modal-routing.module';

import { SelectMagnetismMessageModalPage } from './select-magnetism-message-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMagnetismMessageModalPageRoutingModule
  ],
  // declarations: [SelectMagnetismMessageModalPage]
})
export class SelectMagnetismMessageModalPageModule {}
