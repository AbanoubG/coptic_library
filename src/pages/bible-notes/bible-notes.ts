import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BibleNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-bible-notes',
  templateUrl: 'bible-notes.html',
})
export class BibleNotesPage {
  old_testament = 'OldTestamentPage';
  new_testament = 'NewTestamentPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibleNotesPage');
  }

}
