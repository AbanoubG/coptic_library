import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DesertPage,
    ApostolicPage,
    ChurchFathersPage,
    CopticLanguagePage,
    ChurchArchitecturePage,
    HymnologyPage,
    IconographyPage,
    AlphaPage,
    BetaPage,
    AnnunciationPage,
    NativityPage,
    TheophanyPage,
    EntryPage,
    ResurrectionPage,
    AscensionPage,
    PentecostPage,
    CircumcisionPage,
    EgyptPage,
    PresentationPage,
    WeddingPage,
    TransfigurationPage,
    CovenantPage,
    ThomasPage



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DesertPage,
    ApostolicPage,
    ChurchFathersPage,
    CopticLanguagePage,
    ChurchArchitecturePage,
    HymnologyPage,
    IconographyPage,
    AlphaPage,
    BetaPage,
    AnnunciationPage,
    NativityPage,
    TheophanyPage,
    EntryPage,
    ResurrectionPage,
    AscensionPage,
    PentecostPage,
    CircumcisionPage,
    EgyptPage,
    PresentationPage,
    WeddingPage,
    TransfigurationPage,
    CovenantPage,
    ThomasPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
