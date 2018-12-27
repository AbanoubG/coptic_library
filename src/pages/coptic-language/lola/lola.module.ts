import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LolaPage } from './lola';

@NgModule({
  declarations: [
    LolaPage,
  ],
  imports: [
    IonicPageModule.forChild(LolaPage),
  ],
})
export class LolaPageModule {}
