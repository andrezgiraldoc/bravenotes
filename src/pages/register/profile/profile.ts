import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  private accountData: any;
  private profileForm: any = FormBuilder;
  private genres: Array<string> = [
    "Pop",
    "Rock",
    "Bachata",
    "Baladas"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      artisticName: ['', [Validators.required, Validators.maxLength(10)]],
      birthDay: [''],
      musicalGenre: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, "sideMenu");
    this.accountData = this.navParams.get('accountData');
  }

  sendData() {
    let data = this.profileForm.value;
    console.log(this.accountData);
    console.log(data);
  }
}
