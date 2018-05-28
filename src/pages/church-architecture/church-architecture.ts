import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChurchArchitecturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-church-architecture',
  templateUrl: 'church-architecture.html',
})
export class ChurchArchitecturePage {
  words: any;
  definition: any;
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.words = [
        'Ambon',
        'Cupula',
        'Iconostasis',
        'Nave',
        'Narthex',
        'Chancel',
        ''

    ];
    
}

getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
      this.words = this.words.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChurchFathersPage');
  }

}
