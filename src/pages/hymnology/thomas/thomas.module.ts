import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThomasPage } from './thomas';

@NgModule({
  declarations: [
    ThomasPage,
  ],
  imports: [
    IonicPageModule.forChild(ThomasPage),
  ],
})
export class ThomasPageModule {}
