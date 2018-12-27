import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GammaPage } from './gamma';

@NgModule({
  declarations: [
    GammaPage,
  ],
  imports: [
    IonicPageModule.forChild(GammaPage),
  ],
})
export class GammaPageModule {}
