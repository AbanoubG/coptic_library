import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CongregationPage } from './congregation';

@NgModule({
  declarations: [
    CongregationPage,
  ],
  imports: [
    IonicPageModule.forChild(CongregationPage),
  ],
})
export class CongregationPageModule {}
