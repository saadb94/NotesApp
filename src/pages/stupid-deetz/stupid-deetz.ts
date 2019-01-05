import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
  title: string;
  details: string;
  date: string;
  tags: string;
  note: any;
  list: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastctrl:ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StupidDeetzPage');
  }

  confirm() {
    console.log(this.title);
    console.log(this.details);
    console.log(this.date);
    console.log(this.tags);

    this.note = {
      title: this.title,
      details: this.details,
      date: this.date,
      tags: this.tags
    }

    let toast = this.toastctrl.create({
      message: "Note added.",
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(()=>{
      console.log('dismissed toast');
    });

    console.log("below is the note");
    console.log(this.note);
    console.log(this.note.title);
    
    toast.present();
    //alert("Done! Added to the list.")
  }

}
