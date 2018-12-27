import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  selectedTheme: String;
  //Change Font Size
  textEle: any;
  font_size: number = 55;
  lowLightMode = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private settings: SettingsProvider, private storage: Storage) {
    this.settings.getActiveTheme().subscribe(val => {
      this.selectedTheme = val;
      console.log("constructor theme", val);
      if (this.selectedTheme == 'dark-theme')
        this.lowLightMode = true;
      console.log(this.lowLightMode);
    });
  }

  toggleAppTheme() {
    console.log("theme switch");
    if (this.selectedTheme === 'dark-theme') {
      this.lowLightMode = false;
      this.settings.setActiveTheme('light-theme');
      this.storage.set('selectedTheme', 'light-theme');
    } else {
      this.lowLightMode = true;
      this.settings.setActiveTheme('dark-theme');
      this.storage.set('selectedTheme', 'dark-theme');
    }
  }

  adjustFontSize(value: number, isAdd: boolean) {
    console.log(value, isAdd);
    if (isAdd)
      this.font_size = (this.font_size + value) * 1.1;
    else
      this.font_size = (this.font_size - value - 5);
    console.log(this.font_size);
    let htmlRoot: HTMLElement = <HTMLElement>document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
      htmlRoot.style.fontSize = this.font_size + '%';
      this.storage.set('appFontSize', this.font_size + '%');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }



}
