import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChurchFathersPage } from './church-fathers';

@NgModule({
  declarations: [
    ChurchFathersPage,
  ],
  imports: [
    IonicPageModule.forChild(ChurchFathersPage),
  ],
})
export class ChurchFathersPageModule {}
