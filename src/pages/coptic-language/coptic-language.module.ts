import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CopticLanguagePage } from './coptic-language';

@NgModule({
  declarations: [
    CopticLanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(CopticLanguagePage),
  ],
})
export class CopticLanguagePageModule {}
