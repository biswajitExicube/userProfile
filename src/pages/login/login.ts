import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: any;
  public userName: any;
  public loggedPass: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  forLogin(){
    if(this.email=="" || this.email==undefined){
      alert("provide a valid email id");
      }else if(this.loggedPass=="" || this.loggedPass==undefined){
        alert("password is mandatory");
      }else if(this.loggedPass.length<6){
        alert("password should be more than 6 characters");
      }else{
      firebase.auth().signInWithEmailAndPassword(this.email, this.loggedPass)
        .then(user => {
          console.log(user);
          if(user){
            var userId = user.user.uid;
            const userReference : firebase.database.Reference = firebase.database().ref('/userProfile/' + userId);
            userReference.on('value', userSnapshotValue => {
              console.log(userSnapshotValue.val());
              var email = userSnapshotValue.val().email;
              localStorage.setItem('userEmail', email);
              var userName = userSnapshotValue.val().userName;
              localStorage.setItem('userName', userName);
            });
            this.navCtrl.setRoot(HomePage);
          };
        })
        .catch((error)=>{
          alert(error.message);
          console.log(error);
        })
    }
  }
  goRegistration(){
    this.navCtrl.push(RegistrationPage);
  }
}
