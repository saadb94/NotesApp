import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StupidDeetzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stupid-deetz',
  templateUrl: 'stupid-deetz.html',
})
export class StupidDeetzPage {
  title: any;
  details: any;
  date: any;
  priority: any;
  note: any;
  list: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StupidDeetzPage');
  }

  confirm() {
    console.log(this.title);
    console.log(this.details);
    console.log(this.date);
    console.log(this.priority);
    alert("Done! Added to the list.")

    this.note = {
      title: this.title,
      details: this.details,
      date: this.date,
      priority: this.priority
    }
  }

}
