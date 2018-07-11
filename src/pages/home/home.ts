import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
// import { ConnexionPage } from '../connexion/connexion';
import { IndexPage } from '../index/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public navCtrl: NavController) {

  }

  redirectGoogle() {
    this.platform.ready().then(() => {
       new InAppBrowser("https://www.google.com",'_blank');
  });
  }

  connexionPage() {
    // this.navCtrl.push(ConnexionPage);
    this.navCtrl.push(IndexPage);
  }
}
