import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApostolicPage } from './apostolic';

@NgModule({
  declarations: [
    ApostolicPage,
  ],
  imports: [
    IonicPageModule.forChild(ApostolicPage),
  ],
})
export class ApostolicPageModule {}
