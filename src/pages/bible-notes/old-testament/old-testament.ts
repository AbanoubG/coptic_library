import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GenesisPage} from '../old-testament/genesis/genesis';
import {ExodusPage} from '../old-testament/exodus/exodus';

/**
 * Generated class for the OldTestamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-old-testament',
  templateUrl: 'old-testament.html',
})
export class OldTestamentPage {

  books: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.books = [
        { OldTestamentPage: GenesisPage, BookName: 'Genesis' },
        { OldTestamentPage: ExodusPage, BookName: 'Exodus' },

    ]
    
}

getItems(ev) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
      this.books = this.books.filter((item) => {
          return (item.BookName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  }
}

public openPage(book: any): void {
  this.nav.push(book.OldTestamentPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OldTestamentPage');
  }

}
