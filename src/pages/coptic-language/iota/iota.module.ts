import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IotaPage } from './iota';

@NgModule({
  declarations: [
    IotaPage,
  ],
  imports: [
    IonicPageModule.forChild(IotaPage),
  ],
})
export class IotaPageModule {}
