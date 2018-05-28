import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativityPage } from './nativity';

@NgModule({
  declarations: [
    NativityPage,
  ],
  imports: [
    IonicPageModule.forChild(NativityPage),
  ],
})
export class NativityPageModule {}
