import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';

import firebase from 'firebase';
import { RegistrationPageModule } from '../pages/registration/registration.module';
import { UserDetailsPageModule } from '../pages/user-details/user-details.module';

var config = {
  apiKey: "AIzaSyDN2sP5-IiKSVzXXBPTYDnZJ0RNtcPr_Gw",
  authDomain: "userprofile-74c5f.firebaseapp.com",
  databaseURL: "https://userprofile-74c5f.firebaseio.com",
  projectId: "userprofile-74c5f",
  storageBucket: "userprofile-74c5f.appspot.com",
  messagingSenderId: "813908623907"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    RegistrationPageModule,
    UserDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
