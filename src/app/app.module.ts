import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DesertPage } from '../pages/church-fathers/desert/desert';
import { ApostolicPage } from '../pages/church-fathers/apostolic/apostolic';
import { ChurchFathersPage } from '../pages/church-fathers/church-fathers';
import { CopticLanguagePage } from '../pages/coptic-language/coptic-language';
import { ChurchArchitecturePage } from '../pages/church-architecture/church-architecture';

import { IconographyPage } from '../pages/iconography/iconography';
import { AlphaPage } from '../pages/coptic-language/alpha/alpha';
import { BetaPage } from '../pages/coptic-language/beta/beta';

//Hymnology Import Page
import { HymnologyPage } from '../pages/hymnology/hymnology';
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





import { VersesPage } from '../pages/hymnology/verses/verses';
import {BibleNotesPage} from '../pages/bible-notes/bible-notes';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StreamingMedia} from '@ionic-native/streaming-media';
import { GenesisPage } from '../pages/bible-notes/old-testament/genesis/genesis';
import { ExodusPage } from '../pages/bible-notes/old-testament/exodus/exodus';
import { MatthewPage } from '../pages/bible-notes/new-testament/matthew/matthew';
import { MarkPage } from '../pages/bible-notes/new-testament/mark/mark';
import { SettingsPage } from '../pages/settings/settings';
import { IonicStorageModule } from '@ionic/storage';
//Deacon Responses Import
import { DeaconPage } from '../pages/hymnology/deacon/deacon';
import {Dr_1Page} from '../pages/hymnology/deacon/dr-1/dr-1';
import {Dr_2Page} from '../pages/hymnology/deacon/dr-2/dr-2';
import {Dr_3Page} from '../pages/hymnology/deacon/dr-3/dr-3';
import {Dr_4Page} from '../pages/hymnology/deacon/dr-4/dr-4';
import {Dr_5Page} from '../pages/hymnology/deacon/dr-5/dr-5';
import {Dr_6Page} from '../pages/hymnology/deacon/dr-6/dr-6';
import {Dr_7Page} from '../pages/hymnology/deacon/dr-7/dr-7';
import {Dr_8Page} from '../pages/hymnology/deacon/dr-8/dr-8';
import {Dr_9Page} from '../pages/hymnology/deacon/dr-9/dr-9';
import {Dr_10Page} from '../pages/hymnology/deacon/dr-10/dr-10';
import {Dr_11Page} from '../pages/hymnology/deacon/dr-11/dr-11';
import {Dr_12Page} from '../pages/hymnology/deacon/dr-12/dr-12';
import {Dr_13Page} from '../pages/hymnology/deacon/dr-13/dr-13';
import {Dr_14Page} from '../pages/hymnology/deacon/dr-14/dr-14';
import {Dr_15Page} from '../pages/hymnology/deacon/dr-15/dr-15';
import {Dr_16Page} from '../pages/hymnology/deacon/dr-16/dr-16';
import { CopticDateProvider } from '../providers/coptic-date/coptic-date';
import { SettingsProvider } from '../providers/settings/settings';


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
    ThomasPage,
    SettingsPage,
    Dr_1Page,
    Dr_2Page,
    Dr_3Page,
    Dr_4Page,
    Dr_5Page,
    Dr_6Page,
    Dr_7Page,
    Dr_8Page,
    Dr_9Page,
    Dr_10Page,
    Dr_11Page,
    Dr_12Page,
    Dr_13Page,
    Dr_14Page,
    Dr_15Page,
    Dr_16Page,





  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
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
    ThomasPage,
    SettingsPage,
    Dr_1Page,
    Dr_2Page,
    Dr_3Page,
    Dr_4Page,
    Dr_5Page,
    Dr_6Page,
    Dr_7Page,
    Dr_8Page,
    Dr_9Page,
    Dr_10Page,
    Dr_11Page,
    Dr_12Page,
    Dr_13Page,
    Dr_14Page,
    Dr_15Page,
    Dr_16Page,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CopticDateProvider,
    SettingsProvider
    
  ]
})
export class AppModule {}
