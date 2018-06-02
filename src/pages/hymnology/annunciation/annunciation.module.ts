import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnunciationPage } from './annunciation';


@NgModule({
  declarations: [
    AnnunciationPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnunciationPage),
  ],
})
export class AnnunciationPageModule {}
