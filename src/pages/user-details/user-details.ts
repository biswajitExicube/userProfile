import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  public newUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl : LoadingController) {
    this.newUser = this.navParams.get('newUser');
    console.log(this.newUser);
    let loading = this.loadingCtrl.create({
      content : 'Please Wait...'
    });
    loading.present();

    setTimeout(() =>{
      loading.dismiss();
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
