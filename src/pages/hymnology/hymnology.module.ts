import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HymnologyPage } from './hymnology';

@NgModule({
  declarations: [
    HymnologyPage,
  ],
  imports: [
    IonicPageModule.forChild(HymnologyPage),
  ],
})
export class HymnologyPageModule {}
