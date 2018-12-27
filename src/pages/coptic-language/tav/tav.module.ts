import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TavPage } from './tav';

@NgModule({
  declarations: [
    TavPage,
  ],
  imports: [
    IonicPageModule.forChild(TavPage),
  ],
})
export class TavPageModule {}
