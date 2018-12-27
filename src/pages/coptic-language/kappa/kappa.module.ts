import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KappaPage } from './kappa';

@NgModule({
  declarations: [
    KappaPage,
  ],
  imports: [
    IonicPageModule.forChild(KappaPage),
  ],
})
export class KappaPageModule {}
