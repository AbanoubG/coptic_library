import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Dr_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dr-1',
  templateUrl: 'dr-1.html',
})
export class Dr_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dr_1Page');
  }

}