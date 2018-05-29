import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import firebase from 'firebase';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  public userList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
   this.loadUser();
   let loading = this.loadingCtrl.create({
    content : 'Please Wait...'
  });
  loading.present();

  setTimeout(() =>{
    loading.dismiss();
  }, 1000);
  }

  loadUser(){
    const userRef : firebase.database.Reference =firebase.database().ref('/userProfile/');
    var currentUser = firebase.auth().currentUser.uid;
    userRef.on('value', userSnapshot =>{
      this.userList = [];
      let singleUser = userSnapshot.val();
      console.log(singleUser);
      for(let key in singleUser){
        singleUser[key].userId = key;
        if(singleUser[key].userId != currentUser){
          this.userList.push(singleUser[key]);
        }
      }
      console.log(this.userList);
    })
  }
  itemTapped(event, user) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UserDetailsPage, {
      newUser: user
    });
  }
}
