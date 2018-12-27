import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiPage } from './ti';

@NgModule({
  declarations: [
    TiPage,
  ],
  imports: [
    IonicPageModule.forChild(TiPage),
  ],
})
export class TiPageModule {}
