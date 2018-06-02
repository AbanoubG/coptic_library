import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { ChurchFathersPage } from '../pages/church-fathers/church-fathers';
import { CopticLanguagePage } from '../pages/coptic-language/coptic-language';
import { ChurchArchitecturePage } from '../pages/church-architecture/church-architecture';
import { HymnologyPage } from '../pages/hymnology/hymnology';
import { IconographyPage } from '../pages/iconography/iconography';
import {BibleNotesPage} from '../pages/bible-notes/bible-notes';

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
      { title: 'Church Architecture', component: ChurchArchitecturePage },
      { title: 'Church Fathers', component: ChurchFathersPage },
      { title: 'Coptic Language', component: CopticLanguagePage },
      {title:  'Holy Bible Notes', component: BibleNotesPage},
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
