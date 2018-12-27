import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Dr_1Page } from '../deacon/dr-1/dr-1';
import {Dr_2Page} from '../deacon/dr-2/dr-2';
import {Dr_3Page} from '../deacon/dr-3/dr-3';
import {Dr_4Page} from '../deacon/dr-4/dr-4';
import {Dr_5Page} from '../deacon/dr-5/dr-5';
import {Dr_6Page} from '../deacon/dr-6/dr-6';
import {Dr_7Page} from '../deacon/dr-7/dr-7';
import {Dr_8Page} from '../deacon/dr-8/dr-8';
import {Dr_9Page} from '../deacon/dr-9/dr-9';
import {Dr_10Page} from '../deacon/dr-10/dr-10';
import {Dr_11Page} from '../deacon/dr-11/dr-11';
import {Dr_12Page} from '../deacon/dr-12/dr-12';
import {Dr_13Page} from '../deacon/dr-13/dr-13';
import {Dr_14Page} from '../deacon/dr-14/dr-14';
import {Dr_15Page} from '../deacon/dr-15/dr-15';
import {Dr_16Page} from '../deacon/dr-16/dr-16';





/**
 * Generated class for the DeaconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deacon',
  templateUrl: 'deacon.html',
})
export class DeaconPage {
  responses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.responses = [
        { ResponsePage: Dr_1Page, ResponseName: 'Stand up for prayer' },
        { ResponsePage: Dr_2Page, ResponseName: 'Let us pray' },
        { ResponsePage: Dr_3Page, ResponseName: 'Pray that God may have mercy ' },
        { ResponsePage: Dr_4Page, ResponseName: 'Litany of the Departed' },
        { ResponsePage: Dr_5Page, ResponseName: 'Litany of the Sick' },
        { ResponsePage: Dr_6Page, ResponseName: 'Litany of the Travelers' },
        { ResponsePage: Dr_7Page, ResponseName: 'Litany of the Oblations' },
        { ResponsePage: Dr_8Page, ResponseName: 'Litany of the Gospel' },
        { ResponsePage: Dr_9Page, ResponseName: 'Litany of Peace' },
        { ResponsePage: Dr_10Page, ResponseName: 'Litany of the Fathers' },
        { ResponsePage: Dr_11Page, ResponseName: 'Litany of the Place' },
        { ResponsePage: Dr_12Page, ResponseName: 'Litany of the Waters' },
        { ResponsePage: Dr_13Page, ResponseName: 'Litany of the Plants' },
        { ResponsePage: Dr_14Page, ResponseName: 'Litany of the Fruits' },
        { ResponsePage: Dr_15Page, ResponseName: 'Litany of the Assemblies' },
        { ResponsePage: Dr_16Page, ResponseName: 'Three Absolution Prayers' },


    ]
    
}

getItems(ev) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
      this.responses = this.responses.filter((item) => {
          return (item.ResponseName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  }
}

public openPage(response: any): void {
  this.nav.push(response.ResponsePage);
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad DeaconPage');
  }

}
