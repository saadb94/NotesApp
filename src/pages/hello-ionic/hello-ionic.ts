import { StupidDeetzPage } from './../stupid-deetz/stupid-deetz';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  list: any[];
  payload: JSON;

  constructor(private storage : Storage, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  gotoDetails(){
    this.navCtrl.push(StupidDeetzPage, this.list)
  }
}
