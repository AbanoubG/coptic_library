import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatthewPage} from '../new-testament/matthew/matthew';
import {MarkPage} from '../new-testament/mark/mark';


/**
 * Generated class for the NewTestamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-testament',
  templateUrl: 'new-testament.html',
})
export class NewTestamentPage {

  books: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.books = [
        { NewTestamentPage: MatthewPage, BookName: 'Matthew' },
        { NewTestamentPage: MarkPage, BookName: 'Mark' },

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
  this.nav.push(book.NewTestamentPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTestamentPage');
  }

}
