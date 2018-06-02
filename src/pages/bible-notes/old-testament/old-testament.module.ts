import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldTestamentPage } from './old-testament';

@NgModule({
  declarations: [
    OldTestamentPage,
  ],
  imports: [
    IonicPageModule.forChild(OldTestamentPage),
  ],
})
export class OldTestamentPageModule {}
