import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KhePage } from './khe';

@NgModule({
  declarations: [
    KhePage,
  ],
  imports: [
    IonicPageModule.forChild(KhePage),
  ],
})
export class KhePageModule {}
