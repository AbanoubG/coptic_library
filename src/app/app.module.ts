import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DesertPage } from '../pages/church-fathers/desert/desert';
import { ApostolicPage } from '../pages/church-fathers/apostolic/apostolic';
import { ChurchFathersPage } from '../pages/church-fathers/church-fathers';
import { CopticLanguagePage } from '../pages/coptic-language/coptic-language';
import { ChurchArchitecturePage } from '../pages/church-architecture/church-architecture';
import { HymnologyPage } from '../pages/hymnology/hymnology';
import { IconographyPage } from '../pages/iconography/iconography';
import { AlphaPage } from '../pages/coptic-language/alpha/alpha';
import { BetaPage } from '../pages/coptic-language/beta/beta';
import { AnnunciationPage } from '../pages/hymnology/annunciation/annunciation';
import { NativityPage } from '../pages/hymnology/nativity/nativity';
import { TheophanyPage } from '../pages/hymnology/theophany/theophany';
import { EntryPage } from '../pages/hymnology/entry/entry';
import { ResurrectionPage } from '../pages/hymnology/resurrection/resurrection';
import { AscensionPage } from '../pages/hymnology/ascension/ascension';
import { PentecostPage } from '../pages/hymnology/pentecost/pentecost';
import { CircumcisionPage } from '../pages/hymnology/circumcision/circumcision';
import { EgyptPage } from '../pages/hymnology/egypt/egypt';
import { PresentationPage } from '../pages/hymnology/presentation/presentation';
import { WeddingPage } from '../pages/hymnology/wedding/wedding';
import { TransfigurationPage } from '../pages/hymnology/transfiguration/transfiguration';
import { CovenantPage } from '../pages/hymnology/covenant/covenant';
import { ThomasPage } from '../pages/hymnology/thomas/thomas';
import { CongregationPage } from '../pages/hymnology/congregation/congregation';
import { DeaconPage } from '../pages/hymnology/deacon/deacon';
import { VersesPage } from '../pages/hymnology/verses/verses';
import {BibleNotesPage} from '../pages/bible-notes/bible-notes';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StreamingMedia} from '@ionic-native/streaming-media';
import { GenesisPage } from '../pages/bible-notes/old-testament/genesis/genesis';
import { ExodusPage } from '../pages/bible-notes/old-testament/exodus/exodus';
import { MatthewPage } from '../pages/bible-notes/new-testament/matthew/matthew';
import { MarkPage } from '../pages/bible-notes/new-testament/mark/mark';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BibleNotesPage,
    GenesisPage,
    ExodusPage,
    MatthewPage,
    MarkPage,
    DesertPage,
    ApostolicPage,
    ChurchFathersPage,
    CopticLanguagePage,
    ChurchArchitecturePage,
    HymnologyPage,
    CongregationPage,
    DeaconPage,
    VersesPage,
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
    BibleNotesPage,
    GenesisPage,
    ExodusPage,
    MatthewPage,
    MarkPage,
    DesertPage,
    ApostolicPage,
    ChurchFathersPage,
    CopticLanguagePage,
    ChurchArchitecturePage,
    HymnologyPage,
    CongregationPage,
    DeaconPage,
    VersesPage,
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
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
