import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnunciationPage } from '../annunciation/annunciation';
import { NativityPage } from '../nativity/nativity';
import { TheophanyPage } from '../theophany/theophany';
import { EntryPage } from '../entry/entry';
import { ResurrectionPage } from '../resurrection/resurrection';
import { AscensionPage } from '../ascension/ascension';
import { PentecostPage } from '../pentecost/pentecost';
import { CircumcisionPage } from '../circumcision/circumcision';
import { EgyptPage } from '../egypt/egypt';
import { PresentationPage } from '../presentation/presentation';
import { WeddingPage } from '../wedding/wedding';
import { TransfigurationPage } from '../transfiguration/transfiguration';
import { CovenantPage } from '../covenant/covenant';
import { ThomasPage } from '../thomas/thomas';
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




  ionViewDidLoad() {
    console.log('ionViewDidLoad HymnologyPage');
  }

}
