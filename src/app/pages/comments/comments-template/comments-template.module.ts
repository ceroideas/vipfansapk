import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClengthPipe } from '../../../pipes/clength/clength.pipe';

import { CommentsTemplatePage } from './comments-template.page';

const routes: Routes = [
  {
    path: '',
    component: CommentsTemplatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CommentsTemplatePage,ClengthPipe],
  exports:[ClengthPipe]
})
export class CommentsTemplatePageModule {}
