import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EpsiPage } from './epsi';

@NgModule({
  declarations: [
    EpsiPage,
  ],
  imports: [
    IonicPageModule.forChild(EpsiPage),
  ],
})
export class EpsiPageModule {}
