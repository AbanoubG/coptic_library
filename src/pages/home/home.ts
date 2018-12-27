import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnnunciationPage } from '../hymnology/annunciation/annunciation';
import { NativityPage } from '../hymnology/nativity/nativity';
import { TheophanyPage } from '../hymnology/theophany/theophany';
import { EntryPage } from '../hymnology/entry/entry';
import { ResurrectionPage } from '../hymnology/resurrection/resurrection';
import { AscensionPage } from '../hymnology/ascension/ascension';
import { PentecostPage } from '../hymnology/pentecost/pentecost';
import { CircumcisionPage } from '../hymnology/circumcision/circumcision';
import { EgyptPage } from '../hymnology/egypt/egypt';
import { PresentationPage } from '../hymnology/presentation/presentation';
import { WeddingPage } from '../hymnology/wedding/wedding';
import { TransfigurationPage } from '../hymnology/transfiguration/transfiguration';
import { CovenantPage } from '../hymnology/covenant/covenant';
import { ThomasPage } from '../hymnology/thomas/thomas';
import { CongregationPage } from '../hymnology/congregation/congregation';
import { DeaconPage } from '../hymnology/deacon/deacon';
import { VersesPage } from '../hymnology/verses/verses';

import { CopticDateProvider } from '../../providers/coptic-date/coptic-date';
import { SettingsPage } from '../../pages/settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contents: any;
  public copticDate: any;

  constructor(public navCtrl: NavController, private nav: NavController,private coptic: CopticDateProvider) {
        // Return today's date and time
        var currentTime = new Date();

        // returns the month (from 0 to 11)
        var month = currentTime.getMonth();
    
        // returns the day of the month (from 1 to 31)
        var day = currentTime.getDate();
    
        // returns the year (four digits)
        var year = currentTime.getFullYear();
    
        console.log(month, day + " " + year);
    
        this.copticDate = this.coptic.getCopticDateString(year-1, month, day);
        console.log(this.copticDate);
  }
  public openAnnunciationPage() {
    this.navCtrl.push(AnnunciationPage);
  }

  public openNativityPage() {
    this.navCtrl.push(NativityPage);
  }

  openTheophanyPage() {
    this.navCtrl.push(TheophanyPage);
  }

  openEntryPage() {
    this.navCtrl.push(EntryPage);
  }

  openResurrectionPage() {
    this.navCtrl.push(ResurrectionPage);
  }

  openAscensionPage() {
    this.navCtrl.push(AscensionPage);
  }

  openPentecostPage() {
    this.navCtrl.push(PentecostPage);
  }

  openCircumcisionPage() {
    this.navCtrl.push(CircumcisionPage);
  }

  openEgyptPage() {
    this.navCtrl.push(EgyptPage);
  }

  openPresentationPage() {
    this.navCtrl.push(PresentationPage);
  }

  openWeddingPage() {
    this.navCtrl.push(WeddingPage);
  }

  openTransfigurationPage() {
    this.navCtrl.push(TransfigurationPage);
  }

  openCovenantPage() {
    this.navCtrl.push(CovenantPage);
  }

  openThomasPage() {
    this.navCtrl.push(ThomasPage);
  }

  openCongregationPage() {
    this.navCtrl.push(CongregationPage);
  }

  openDeaconPage() {
    this.navCtrl.push(DeaconPage);
  }

  openVersesPage() {
    this.navCtrl.push(VersesPage);
  }


public openPage(content: any): void {
  this.nav.push(content.ContentPage);
}

openSettingsPage() {
  this.nav.push(SettingsPage);
};




}
