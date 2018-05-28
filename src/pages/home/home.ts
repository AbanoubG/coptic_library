import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DesertPage } from '../desert/desert';
import { ApostolicPage } from '../apostolic/apostolic';
import { ChurchFathersPage } from '../church-fathers/church-fathers';
import { CopticLanguagePage } from '../coptic-language/coptic-language';
import { ChurchArchitecturePage } from '../church-architecture/church-architecture';
import { HymnologyPage } from '../hymnology/hymnology';
import { IconographyPage } from '../iconography/iconography';
import { AlphaPage } from '../alpha/alpha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contents: any;

  constructor(public navCtrl: NavController, private nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.contents = [
        { ContentPage: ChurchFathersPage, ContentName: 'Church Fathers' },
        { ContentPage: CopticLanguagePage, ContentName: 'Coptic Language' },
        { ContentPage: ChurchArchitecturePage, ContentName: 'Church Architecture' },
        { ContentPage: HymnologyPage, ContentName: 'Hymnology' },
        { ContentPage: IconographyPage, ContentName: 'Iconography' },
        

    ]
    
}

getItems(ev) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
      this.contents = this.contents.filter((item) => {
          return (item.ContentName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  }
}

public openPage(content: any): void {
  this.nav.push(content.ContentPage);
}



}
