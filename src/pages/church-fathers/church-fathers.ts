import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesertPage } from '../church-fathers/desert/desert';
import { ApostolicPage } from '../church-fathers/apostolic/apostolic';

/**
 * Generated class for the ChurchFathersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-church-fathers',
  templateUrl: 'church-fathers.html',
})
export class ChurchFathersPage {
  fathers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.fathers = [
        { ChurchFathersPage: ApostolicPage, FatherName: 'Apostolic Fathers' },
        { ChurchFathersPage: DesertPage, FatherName: 'Desert Fathers' },

    ]
    
}

getItems(ev) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
      this.fathers = this.fathers.filter((item) => {
          return (item.FatherName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  }
}

public openPage(father: any): void {
  this.nav.push(father.ChurchFathersPage);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChurchFathersPage');
  }

}
