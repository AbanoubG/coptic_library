import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoriPage } from './hori';

@NgModule({
  declarations: [
    HoriPage,
  ],
  imports: [
    IonicPageModule.forChild(HoriPage),
  ],
})
export class HoriPageModule {}
