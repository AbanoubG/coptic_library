import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { DesertPage } from '../pages/desert/desert';
import { ApostolicPage } from '../pages/apostolic/apostolic';
import { ChurchFathersPage } from '../pages/church-fathers/church-fathers';
import { CopticLanguagePage } from '../pages/coptic-language/coptic-language';
import { ChurchArchitecturePage } from '../pages/church-architecture/church-architecture';
import { HymnologyPage } from '../pages/hymnology/hymnology';
import { IconographyPage } from '../pages/iconography/iconography';
import { AlphaPage } from '../pages/alpha/alpha';
import { BetaPage } from '../pages/beta/beta';
import { AnnunciationPage } from '../pages/annunciation/annunciation';
import { NativityPage } from '../pages/nativity/nativity';
import { TheophanyPage } from '../pages/theophany/theophany';
import { EntryPage } from '../pages/entry/entry';
import { ResurrectionPage } from '../pages/resurrection/resurrection';
import { AscensionPage } from '../pages/ascension/ascension';
import { PentecostPage } from '../pages/pentecost/pentecost';
import { CircumcisionPage } from '../pages/circumcision/circumcision';
import { EgyptPage } from '../pages/egypt/egypt';
import { PresentationPage } from '../pages/presentation/presentation';
import { WeddingPage } from '../pages/wedding/wedding';
import { TransfigurationPage } from '../pages/transfiguration/transfiguration';
import { CovenantPage } from '../pages/covenant/covenant';
import { ThomasPage } from '../pages/thomas/thomas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: '',
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Church Fathers', component: ChurchFathersPage },
      { title: 'Church Architecture', component: ChurchArchitecturePage },
      { title: 'Coptic Language', component: CopticLanguagePage },
      { title: 'Hymnology', component: HymnologyPage },
      { title: 'Iconography', component: IconographyPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
