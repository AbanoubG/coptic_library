import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

/**
 * Generated class for the HymnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hymnology',
  templateUrl: 'hymnology.html',
})
export class HymnologyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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




  ionViewDidLoad() {
    console.log('ionViewDidLoad HymnologyPage');
  }

}
