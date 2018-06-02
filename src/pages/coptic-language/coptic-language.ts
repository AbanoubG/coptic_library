import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlphaPage } from '../coptic-language/alpha/alpha';
import { BetaPage } from '../coptic-language/beta/beta';



/**
 * Generated class for the CopticLanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coptic-language',
  templateUrl: 'coptic-language.html',
})

export class CopticLanguagePage {


  constructor(public navCtrl: NavController, private nav: NavController) {
  }

  

  
  openAlphaPage() {
    this.navCtrl.push(AlphaPage);
  }
  
  public openBetaPage() {
    this.nav.push(BetaPage)
  }


}
