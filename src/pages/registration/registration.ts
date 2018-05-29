import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  public firstName:any;
  public lastName:any;
  public userName:any;
  public email:any;
  public password:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  forRegistration(){
    if(this.firstName == "" || this.firstName == undefined){
      alert("First Name Can't be Blank!");
    }else if(this.lastName == "" || this.lastName == undefined){
      alert("Last Name Can't be Blank!");
    }else if(this.userName == "" || this.userName == undefined){
      alert("User Name Can't be Blank!");
    }else if(this.password == "" || this.password == undefined){
      alert("Password Can't be Blank!");
    }else if(this.password.length<6){
      alert("Password should be more than 6 character!");
    }else{
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(newUser => {
          console.log(newUser);
          console.log(newUser.user.uid);
          firebase.database().ref('/userProfile').child(newUser.user.uid).set({
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            email: this.email,
            login: true
          });
          this.navCtrl.setRoot(LoginPage)
        });
    }
    
  }
}
