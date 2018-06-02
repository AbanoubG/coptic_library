import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibleNotesPage } from './bible-notes';

@NgModule({
  declarations: [
    BibleNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(BibleNotesPage),
  ],
})
export class BibleNotesPageModule {}
