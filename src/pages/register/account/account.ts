import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { Profile } from '../profile/profile';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class Account {

  private phoneNumber: string = "+57";
  private name: string = "";
  private lastName: string = "";
  private email: string = "";
  private password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "sideMenu");
  }

  sendData() {
    let accountData = {
      phoneNumber: this.phoneNumber,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    // console.log("data sent: ", accountData);
    this.navCtrl.push(Profile, {
      accountData: accountData
    });
  }
}
